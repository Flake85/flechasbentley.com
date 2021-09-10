import { DirectiveBinding } from "vue";

export default {
  created(el: HTMLDivElement, binding: DirectiveBinding) {
    const animatedScrollObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", binding.value);
          // animatedScrollObserver.unobserve(entry.target);
          return;
        }
        entry.target.classList.remove("animate__animated", binding.value);
      });
    });
    animatedScrollObserver.observe(el);
  }
};

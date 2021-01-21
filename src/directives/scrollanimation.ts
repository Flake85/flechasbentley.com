import { DirectiveBinding } from "vue";

export default {
  created(el: HTMLDivElement, binding: DirectiveBinding) {
    const animatedScrollObserver = new IntersectionObserver(
      (entries, animatedScrollObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", binding.value);
            animatedScrollObserver.unobserve(entry.target);
          }
        });
      }
    );
    animatedScrollObserver.observe(el);
  }
};

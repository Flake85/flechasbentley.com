export default {
  created(el: HTMLDivElement, binding: any) {
    const animatedScrollObserver = new IntersectionObserver(
      (entries, animatedScrollObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", binding.value);
            console.log(binding.value);
            animatedScrollObserver.unobserve(entry.target);
          }
        });
      }
    );
    animatedScrollObserver.observe(el);
  }
};

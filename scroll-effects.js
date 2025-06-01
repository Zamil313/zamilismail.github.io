gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 1.2,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

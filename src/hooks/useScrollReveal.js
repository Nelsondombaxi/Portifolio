import { useEffect } from "react";

function useScrollReveal(selector, options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.2}s`; // delay em cascata
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, options]);
}

export default useScrollReveal;
import React, { useEffect, useRef, useState } from "react";

function ScrollReveal({ as: Element = "div", children, className }) {
  const revealRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return undefined;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Element
      ref={revealRef}
      className={`text-reveal${isVisible ? " is-visible" : ""} ${className || ""}`.trim()}
    >
      {children}
    </Element>
  );
}

export default ScrollReveal;

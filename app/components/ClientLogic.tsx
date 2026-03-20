"use client";
import { useEffect } from "react";

export default function ClientLogic() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = target.getAttribute("href");
        if (id) {
          const el = document.querySelector(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationPlayState = "running";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const observeElements = () => {
      document.querySelectorAll(".product-card, .benefit-card, .step-card, .faq-item").forEach((el) => {
        (el as HTMLElement).style.animationPlayState = "paused";
        observer.observe(el);
      });
    };
    
    // Pequeno delay para garantir que os elementos carregados dinamicamente do Sanity existam na DOM
    setTimeout(observeElements, 500);

    // Header shadow on scroll
    const header = document.querySelector(".header") as HTMLElement;
    const handleHeaderScroll = () => {
      if (header) {
        if (window.scrollY > 50) {
          header.style.boxShadow = "0 4px 30px rgba(0,0,0,0.15)";
        } else {
          header.style.boxShadow = "none";
        }
      }
    };
    window.addEventListener("scroll", handleHeaderScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleScroll);
      window.removeEventListener("scroll", handleHeaderScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}

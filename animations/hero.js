import { gsap } from 'gsap';

export const animateHero = () => {
  const duration = 1.5;
  const stagger = 0.4;

  gsap.fromTo('.head_text',
    { x: -200, opacity: 0 },
    { x: 0, opacity: 1, duration: duration, ease: "power2.out", stagger: stagger }
  );
  gsap.fromTo('.custom-border',
    { x: -200, opacity: 0 },
    { x: 0, opacity: 1, duration: duration, ease: "power2.out", stagger: stagger }
  );

  gsap.fromTo('.orange_gradient',
    { scale: 0.5, rotate:0, },
    { scale: 1,  rotate:45, ease: "elastic.out(1, 0.7)" }
  );

  gsap.fromTo('.desc',
    { x: -200, opacity: 0 },
    { x: 0, opacity: 1, duration: duration, ease: "power2.out", delay: stagger }
  );
};

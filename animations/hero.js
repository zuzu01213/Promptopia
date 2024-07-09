import { gsap } from 'gsap';

export const animateHero = () => {
  const duration = 1.5;
  const stagger = 0.2;

  gsap.fromTo('.head_text',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: duration, ease: "power4.out", stagger: stagger }
  );

  gsap.fromTo('.orange_gradient',
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: duration + 0.5, ease: "elastic.out(1, 0.7)" }
  );

  gsap.fromTo('.desc',
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: duration, ease: "power4.out", delay: stagger }
  );
};

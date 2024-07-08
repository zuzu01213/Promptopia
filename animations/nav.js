import { gsap } from 'gsap';

export const animateNav = () => {
  const duration = 1.5;

  const elements = [
    '.object-contain',
    '.logo_text',
    '.black_btn',
    '.outline_btn',
    '.rounded-full'
  ];

  gsap.fromTo(elements, 
    { y: -50, opacity: 0 }, 
    { y: 0, opacity: 1, duration, ease: "power3.out" }
  );
};

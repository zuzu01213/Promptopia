import { gsap } from 'gsap';

export const animateNav = () => {
 

  gsap.fromTo('.outline_btn',
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.5, ease: "power4.out",  }
  );
  gsap.fromTo('.black_btn',
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.5, ease: "power4.out",  }
  );

//   gsap.fromTo('.rounded-full',
//     { scale: 0, opacity: 0 },
//     { scale: 1, opacity: 1, duration: duration + 0.5, ease: "elastic.out(1, 0.7)" }
//   );

//   gsap.fromTo('.gap-2',
//     { x: -100, opacity: 0 },
//     { x: 0, opacity: 1, duration: duration, ease: "power4.out", delay: stagger }
//   );
};

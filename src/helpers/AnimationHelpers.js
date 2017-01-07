import { TweenMax } from 'gsap';

export function logoAnimation() {
  return TweenMax.from('.app-opening-logo', 2, {
    opacity: .5,
    scale: 0,
    ease: Bounce.easeOut,
  });
}

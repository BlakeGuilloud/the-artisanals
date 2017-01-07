import { TweenMax } from 'gsap';
import { hashHistory } from 'react-router';

export function logoAnimation() {
  TweenMax.from('.app-opening-logo', 1.5, {
    opacity: .5,
    scale: 0,
    ease: Bounce.easeOut,
  });

  // setTimeout(() => {
  //   hashHistory.push('home');
  // }, 3000);
}

export function headerAnimation() {
  TweenMax.from('.app-header-logo, .app-content-img', .5, {
    marginLeft: '100vw',
  });
}

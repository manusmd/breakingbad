import createElement from '../lib/element';
import styles from './scrollTop.module.css';

export default function createScrollButton() {
  const scrollButton = createElement('button', {
    className: styles.scrollTopButton,
    textContent: '🔝',
    onclick: function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  });

  return createElement('div', { className: styles.scrollTopDiv }, [
    scrollButton,
  ]);
}

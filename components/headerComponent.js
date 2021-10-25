import createElement from '../lib/element';
import styles from './headerComponent.module.css';

export default function createHeaderElement() {
  const headerTitle = createElement('h1', { className: 'headerTitle' }, [
    'Breaking Bad',
  ]);

  return createElement(
    'div',
    {
      className: styles.header,
    },
    [headerTitle]
  );
}

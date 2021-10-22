import createElement from '../lib/element';
import styles from './mainElement.module.css';
import createCharacterCard from './characterCard';

export default function createMainElement() {
  const characterCard = createCharacterCard(
    'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    'Walter White',
    'Heisenberg',
    'Deseased',
    '12345'
  );
  return createElement('div', { className: styles.main }, [characterCard]);
}

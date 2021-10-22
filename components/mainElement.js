import createElement from '../lib/element';
import createCharacterCard from './characterCard';

export default function createMainElement() {
  const characterCard = createCharacterCard(
    'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    'Walter White',
    'Heisenberg',
    'Deseased',
    '12345'
  );
  return createElement('div', {}, [characterCard]);
}

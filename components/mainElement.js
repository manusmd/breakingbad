import createElement from '../lib/element';
import styles from './mainElement.module.css';
import createCharacterCard from './characterCard';

export default async function createMainElement() {
  const response = await fetch('https://breakingbadapi.com/api/characters');
  const body = await response.json();
  const characters = body.map((character) => {
    return createCharacterCard(character);
  });
  return createElement('div', { className: styles.main }, [...characters]);
}

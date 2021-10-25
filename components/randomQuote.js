import createElement from '../lib/element';
import styles from './randomQuote.module.css';

export default async function createRandomQuote() {
  //const randomNumber = Math.floor(Math.random() * (50 - 1)) + 1;
  const response = await fetch('https://breakingbadapi.com/api/quote/random');
  const body = await response.json();
  console.log(body[0].quote);

  const element = createElement('div', {
    className: styles.randomQuote,
  });
  element.append(body[0].quote);
  return element;
}

import createElement from '../lib/element';
import styles from './characterCard.module.css';

export default function createCharacterCard(
  img,
  name,
  nickname,
  status,
  birthday
) {
  // Content of the divs
  //Character name
  const characterNameTitle = createElement(
    'h2',
    { className: styles.characterDescriptionTitles },
    ['Name:']
  );
  const characterName = createElement(
    'p',
    { className: styles.characterDescriptionContent },
    [name]
  );
  //Character status
  const characterStatusTitle = createElement(
    'h2',
    { className: styles.characterDescriptionTitles },
    ['Status:']
  );
  const characterStatus = createElement(
    'p',
    { className: styles.characterDescriptionContent },
    [status]
  );
  //Character Birthday
  const characterBirthdayTitle = createElement(
    'h2',
    { className: styles.characterDescriptionTitles },
    ['Birthday:']
  );
  const characterBirthday = createElement(
    'p',
    { className: styles.characterDescriptionContent },
    [birthday]
  );

  //Description structure
  const characterNameDiv = createElement(
    'div',
    {
      className: styles.characterDescriptionDiv,
    },
    [characterNameTitle, characterName]
  );
  const characterStatusDiv = createElement(
    'div',
    {
      className: styles.characterDescriptionDiv,
    },
    [characterStatusTitle, characterStatus]
  );
  const characterBirthdayDiv = createElement(
    'div',
    {
      className: styles.characterDescriptionDiv,
    },
    [characterBirthdayTitle, characterBirthday]
  );

  //Complete character card structure
  const image = createElement('img', {
    className: styles.characterImg,
    src: img,
  });
  const description = createElement(
    'section',
    { className: styles.characterDescription },
    [characterNameDiv, characterStatusDiv, characterBirthdayDiv]
  );

  return createElement(
    'article',
    {
      className: 'characterCard',
    },
    [image, description]
  );
}

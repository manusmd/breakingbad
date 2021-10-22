import './style.css';
import createHeaderElement from './components/headerComponent';
import createRandomQuote from './components/randomQuote';
import createMainElement from './components/mainElement';

async function renderApp() {
  const appElement = document.querySelector('#app');
  const headerElement = createHeaderElement();
  const randomQuote = await createRandomQuote();
  const mainElement = await createMainElement();

  appElement.append(headerElement, randomQuote, mainElement);
}
renderApp();

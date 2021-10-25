import './style.css';
import createHeaderElement from './components/headerComponent';
import createRandomQuote from './components/randomQuote';
import createMainElement from './components/mainElement';
import createScrollButton from './components/scrollTop';

async function renderApp() {
  const appElement = document.querySelector('#app');
  const headerElement = createHeaderElement();
  const randomQuote = await createRandomQuote();
  const mainElement = await createMainElement();
  const scrollTopButton = createScrollButton();

  appElement.append(headerElement, randomQuote, mainElement, scrollTopButton);
}
renderApp();

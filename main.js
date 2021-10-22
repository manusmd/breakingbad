import './style.css';
import createElement from './lib/element';
import createHeaderElement from './components/headerComponent';
import createMainElement from './components/mainElement';

function renderApp() {
  const appElement = document.querySelector('#app');
  const headerElement = createHeaderElement();
  const mainElement = createMainElement();

  appElement.append(headerElement, mainElement);
}
renderApp();

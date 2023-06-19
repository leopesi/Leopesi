import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'br';
window.$secondaryLanguage = 'en';
window.$tertiaryLanguage = 'sp';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';
window.$tertiaryLanguageIconId = 'tertiary-lang-icon';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();

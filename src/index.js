import React from 'react';
import ReactDOM from 'react-dom';



import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import {$, jQuery} from "./lib/jquery";
// // export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;


ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

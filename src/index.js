import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Container from './Container';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Container />, document.getElementById('container'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './sberbank.css';
import MainPage from './sberbank-op';
import SberReg from './sberbank-reg';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainPage />, document.getElementById('root'));
ReactDOM.render(<SberReg />, document.getElementById('root1'));
registerServiceWorker();

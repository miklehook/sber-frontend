import React from 'react';
import ReactDOM from 'react-dom';
import './sberbank.css';
import App from './sberbank-op';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

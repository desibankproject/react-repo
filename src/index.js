import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
var element=document.getElementById('root');
ReactDOM.render(<App/>,element);
registerServiceWorker();

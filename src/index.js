import React from 'react';
import ReactDOM from 'react-dom';

import './normalize-v8.0.0.css';
import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

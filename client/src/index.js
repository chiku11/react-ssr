import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'holderjs'
import {store} from './store/createStore';

ReactDOM.hydrate(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
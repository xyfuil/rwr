import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import rootStore from './stores/rootStore'

// Render the main component into the dom
const store = rootStore();
const history = {};
ReactDOM.render(<App store={store} history={history} />, document.getElementById('app'));

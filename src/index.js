import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// MOVE TO ROUTER.js
import * as router5 from 'router5';

 import { routeNode } from 'react-router5';
const createRouter = router5.createRouter

export const routes = {
    root: '/',
    add: 'add'
}

export const urls = {
    root: '/',
    add: '/add'
}


export const router = createRouter();
router
    .setOption("defaultRoute", routes.root)
    .addNode(routes.root, urls.root)
    .addNode(routes.add, urls.add)

//router.start(()=>ReactDOM.render(routeNode('')(<App/>), document.getElementById('root')));
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

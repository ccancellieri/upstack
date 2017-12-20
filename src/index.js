import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// MOVE TO ROUTER.js
import * as router5 from 'router5';
import browserPlugin from 'router5/plugins/browser';
import listenersPlugin from 'router5/plugins/listeners';
//import persistentParamsPlugin from 'router5/plugins/persistentParams';
//const browserPlugin = require('router5/dist/umd/router5BrowserPlugin');
//const listenersPlugin = require('router5/dist/umd/router5ListenersPlugin');

 import { routeNode } from 'react-router5';
import { RouterProvider } from 'react-router5';
const { createRouter } = router5


export const routes = {
    root: '/',
    app: 'app',
      list: 'app.list',
      insert: 'app.insert'
}

export const urls = {
    root: '/',
    app: '/app',
      list: '/list',
      insert: '/insert'
}

export const router = createRouter();
router.setOption("defaultRoute", routes.app)
    .setOption("strictQueryParams", false)
    .addNode(routes.root, urls.root)
    .addNode(routes.app, urls.app)
    .addNode(routes.insert, urls.insert)
    .addNode(routes.list, urls.list)
    .usePlugin(listenersPlugin())
    .usePlugin(browserPlugin({
        forceDeactivate: true
        ,useHash: false
        ,base: "/app"
    }))

router.start(()=>ReactDOM.render(<RouterProvider router={router}><App/></RouterProvider>, document.getElementById('root')));

//ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { data } from './data/data.js';
import Insert from './insert.js';
import List from './list.js';

import { router, routes } from "./index.js";

import { routeNode } from 'react-router5';

const clone = (o) => JSON.parse(JSON.stringify(o))

class App extends Component {

  constructor(p){
    super(p);

    this.state={
      data
    };
    this.insert = this.insert.bind(this);
  }

  insert(data,then){
    let state = clone(this.state);
    state.data=state.data.concat({
          first_name:data.name,
          email:data.mail
        });
    this.setState(state, then && then);
  }


  render() {

    const _data = this.state.data;
    //const { route } = this.props;

    const { user, route } =  this.props;
    const params = route && route.params;

    switch (route.name) {
        case routes.insert:
          return (
            <div className="App">
              <Insert insert={this.insert}/>
            </div>
          );
        case routes.list:
        default:
          return (
            <div className="App">
              <List data={_data} />
            </div>
          );
      }
  }
}

export default routeNode('app')(App);
//export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { data } from './data/data.js';
import { routeNode } from 'react-router5';

import { router, routes } from "./index.js";
class Insert extends Component {

  constructor(p){
    super(p);

    this.state={
      field: {
        name:'',
        mail:''
      }
    };
  }

  render() {

    const insert = this.props.insert;

    return (
      <div className="Insert">
        <input type='text' onChange={(e)=>this.setState({name:e.target.value, mail:this.state.mail})}/>
        <input type='text' onChange={(e)=>this.setState({name:this.state.name, mail:e.target.value})}/>
        <input type='button' onClick={(e)=>insert(this.state, router.navigate(routes.app))}/>
      </div>
    );
  }

}

//export default Insert;
export default routeNode('app.insert')(Insert);

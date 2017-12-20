import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { data } from './data/data.js';
import { router, routes } from "./index.js";
import Insert from './insert.js';

const clone = (o) => JSON.parse(JSON.stringify(o))

class App extends Component {

  constructor(p){
    super(p);

    this.state={
      data
    };
  }

  render() {

    const _data = this.state.data;

    return (
      <div className="App">
      <Insert insert={(data,then)=>{
        let state = clone(this.state);
        state.data=state.data.concat({
              first_name:data.name,
              email:data.email
            });
        this.setState(state, then && then);
      }}/>
        <input type='button' onClick={(e)=>e}/>
        <input type='text' onChange={(e)=>this.setState({data:this.filter(e)})}/>
        <div>
          {this.getList(_data)}
        </div>
      </div>
    );
  }

  filter = (e)=>data.filter(d=>{
    const filter = e.target.value && e.target.value.toLowerCase();
    return d && d.first_name && d.first_name.toLowerCase().includes(filter);
  })

  getList=(data)=>
    data.map((d,idx)=>
      <p className="Field" key={idx}>
        <span className="App-title">{d.first_name}</span>
        <span className="App-title">{d.email}</span>
      </p>
    );

}

export default App;

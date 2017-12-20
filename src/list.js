import React, { Component } from 'react';
import './App.css';

import { router, routes } from "./index.js";

import { routeNode } from 'react-router5';


const onFilter = (filter, data)=>{
  const _filter = filter.toLowerCase();
  return data && data.filter(d=>{
    return d && d.first_name && d.first_name.toLowerCase().includes(_filter);
})}

const getList=(data)=>
    data.map((d,idx)=>
      <p className="Field" key={idx}>
        <span className="App-title">{d.first_name}</span>
        <span className="App-title">{d.email}</span>
      </p>
    );

class List extends Component {
 constructor(p){
   super(p);
   this.state={
     filter:undefined
   }
 }

  render() {

    const { data } = this.props;
    const { filter } = this.state;
    return (
      <div className="List">
        <input type='button' onClick={(e)=>router.navigate('app.insert')}/>
        <input type='text' onChange={(e)=>this.setState({filter:e.target.value})}/>
        <div>
          {getList(filter && onFilter(filter,data) || data)}
        </div>
      </div>
    );
  }



}
//export default List;
export default routeNode('app.list')(List);

import React, { Component } from 'react';

import AppHeader from '../app-header';
import AppInfo from '../app-info';
import AppFooter from '../app-footer';
import Time from '../time';
import Slider from '../slider';

import './app.scss';


export default class App extends Component {

 render() {
    return (
      <div className='app'>
        <AppHeader></AppHeader>
        <hr/>
        <AppInfo></AppInfo>
        <hr></hr>
        <Slider></Slider>
         <hr></hr>
        <Time></Time>
        <AppFooter></AppFooter>
      </div>) 
  }
}

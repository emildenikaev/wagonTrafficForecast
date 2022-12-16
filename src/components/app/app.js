import React, { Component } from 'react';

import AppHeader from '../app-header';
import AppInfo from '../app-info';
import AppFooter from '../app-footer';

import './app.scss';

export default class App extends Component {

 render() {
    return (
      <div className='app'>
        <AppHeader></AppHeader>
        <hr/>
        <AppInfo></AppInfo>
        <AppFooter></AppFooter>
      </div>) 
  }
}

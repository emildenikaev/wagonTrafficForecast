import React from 'react';
import './app-header.scss';

const AppHeader = () => {
  return (
    <div className='app-header'>
      <div class="cover"></div>
      <img src={require('../../assets/images/track.jpg')}  alt="Грузоперевозки в Москве" className='app-header__icon'/>
      <a className='header-services'>RF</a>
      <div class="app-header__info">Поля</div>
      <a className='header-about'>О компании</a>
  
    </div>
  )
}

export default AppHeader;
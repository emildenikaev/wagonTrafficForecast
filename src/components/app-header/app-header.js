import React from 'react';
import './app-header.scss';

const AppHeader = () => {
  return (
    
    <div className='app-header'>
      <div className="cover"></div>
      <img src={require('../../assets/images/track.jpg')}  alt="Грузоперевозки в Москве" className='app-header__icon'/>
      <div className='header-services' >RF</div>
      <div className="app-btn double-border-button app-header__info">Проложи свой маршрут!</div>
      
    </div>
  )
}

export default AppHeader;
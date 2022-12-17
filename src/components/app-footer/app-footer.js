import React from 'react';
import './app-footer.scss';

const AppFooter = () => {
  return (

    <div className='app-footer'>
      <div className="cover-foot"></div>
      <img src={require('../../assets/images/map.jpg')}  alt="Грузоперевозки в Москве" className='app-footer__icon'/>
  
      <a className="app-footer__info ">@ RusFuture 2022. Мы за качество!</a>

    </div>
  )
}

 

export default AppFooter;
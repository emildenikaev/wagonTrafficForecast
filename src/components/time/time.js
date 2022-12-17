import React from 'react';
import './time.scss';

const Time = () => {
  
  return (
    <div className='info'>
      <h3>Заполните все поля, чтобы отобразилось расчетное время пути</h3>
      <form>
        <div>
          <label htmlFor="st_code_snd">Станции отправления: </label>
          <input id="st_code_snd" type="text" name="st_code_snd"></input>
        </div>
          <div><label htmlFor="st_code_rsv">Станции назначения: </label>
          <input id="st_code_rsv" type="text" name="st_code_rsv"></input></div>
          <div><label htmlFor="date_depart_year">Год отправления: </label>
          <input id="date_depart_year" type="text" name="nadate_depart_year"></input></div>
          <div><label htmlFor="date_depart_month">Месяц отправления: </label>
          <input id="date_depart_month" type="text" name="date_depart_month"></input></div>
          <div><label htmlFor="date_depart_week">Неделя отправления: </label>
          <input id="date_depart_week" type="text" name="date_depart_week"></input></div>
          <div><label htmlFor="date_depart_day">День отправления: </label>
          <input id="date_depart_day" type="text" name="date_depart_day"></input></div>
          <div><label htmlFor="date_depart_hour">Час отправления: </label>
          <input id="date_depart_hour" type="text" name="date_depart_hour"></input></div>
          <div><label htmlFor="fr_id">id груза: </label>
          <input id="fr_id" type="text" name="fr_id"></input></div>
            <div><label htmlFor="route_type">Тип отправки: </label>
          <input id="route_type" type="text" name="route_type"></input></div>
            <div><label htmlFor="is_load">Признак гружёности: </label>
          <input id="is_load" type="text" name="is_load"></input></div>
            <div><label htmlFor="rod">Род подвижного состава: </label>
          <input id="rod" type="text" name="rod"></input></div>
            <div><label htmlFor="common_ch">id обобщённой характеристики вагона: </label>
          <input id="common_ch" type="text" name="common_ch"></input></div>
            <div><label htmlFor="vidsobst">Вид собственности: </label>
          <input id="vidsobst" type="text" name="vidsobst"></input></div>
            <div><label htmlFor="distance">Расстояние рейса: </label>
          <input id="distance" type="text" name="distance"></input></div>
            <div><label htmlFor="snd_org_id">id грузоотправителя: </label>
          <input id="snd_org_id" type="text" name="snd_org_id"></input></div>
            <div><label htmlFor="rsv_org_id">id грузополучателя: </label>
          <input id="rsv_org_id" type="text" name="rsv_org_id"></input></div>
            <div><label htmlFor="snd_roadid">id дороги отправления: </label>
          <input id="snd_roadid" type="text" name="snd_roadid"></input></div>
            <div><label htmlFor="rsv_roadid">id дороги назначения: </label>
          <input id="rsv_roadid" type="text" name="rsv_roadid"></input></div>
            <div><label htmlFor="snd_dp_id">id региона отправления: </label>
          <input id="snd_dp_id" type="text" name="snd_dp_id"></input></div>
          <div><label htmlFor="rsv_dp_id">id региона назначения: </label>
          <input id="rsv_dp_id" type="text" name="rsv_dp_id"></input></div>
        

         <a className="app-btn double-border-button count">Рассчитать</a>
      </form>
      <h4 className='result'>Ориентировачное время: 500</h4>


    </div>
  )
}


export default Time;
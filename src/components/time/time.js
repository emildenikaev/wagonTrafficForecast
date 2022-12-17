import React from 'react';
import './time.scss';

const Time = () => {
  return (
    <div className='info'>
      <h3>Заполните все поля, чтобы отобразилось расчетное время пути</h3>
      <form>
          <label for="st_code_snd">станции отправления:</label>
          <input id="st_code_snd" type="text" name="st_code_snd"></input>

          <label for="st_code_rsv">станции назначения:</label>
          <input id="st_code_rsv" type="text" name="st_code_rsv">  
          </input>
            <label for="date_depart_year">год отправления:</label>
          <input id="date_depart_year" type="text" name="nadate_depart_year"></input>
          <label for="date_depart_month">месяц отправления:</label>
          <input id="date_depart_month" type="text" name="date_depart_month"></input>
          <label for="date_depart_week">неделя отправления:</label>
          <input id="date_depart_week" type="text" name="date_depart_week"></input>
          <label for="date_depart_day">день отправления:</label>
          <input id="date_depart_day" type="text" name="date_depart_day"></input>
          <label for="date_depart_hour">час отправления:</label>
          <input id="date_depart_hour" type="text" name="date_depart_hour"></input>
          <label for="fr_id">id груза:</label>
          <input id="fr_id" type="text" name="fr_id"></input>
            <label for="route_type">тип отправки:</label>
          <input id="route_type" type="text" name="route_type"></input>
            <label for="is_load">признак гружёности:</label>
          <input id="is_load" type="text" name="is_load"></input>
            <label for="rod">род подвижного состава:</label>
          <input id="rod" type="text" name="rod"></input>
            <label for="common_ch">id обобщённой характеристики вагона:</label>
          <input id="common_ch" type="text" name="common_ch"></input>
            <label for="vidsobst">вид собственности:</label>
          <input id="vidsobst" type="text" name="vidsobst"></input>
            <label for="distance">расстояние рейса:</label>
          <input id="distance" type="text" name="distance"></input>
            <label for="snd_org_id">id грузоотправителя:</label>
          <input id="snd_org_id" type="text" name="snd_org_id"></input>
            <label for="rsv_org_id">id грузополучателя:</label>
          <input id="rsv_org_id" type="text" name="rsv_org_id"></input>
            <label for="snd_roadid">id дороги отправления:</label>
          <input id="snd_roadid" type="text" name="snd_roadid"></input>
            <label for="rsv_roadid">id дороги назначения:</label>
          <input id="rsv_roadid" type="text" name="rsv_roadid"></input>
            <label for="snd_dp_id">id региона отправления:</label>
          <input id="snd_dp_id" type="text" name="snd_dp_id"></input>
          <label for="rsv_dp_id">id региона назначения:</label>
          <input id="rsv_dp_id" type="text" name="rsv_dp_id"></input>
        

         <a className="app-btn double-border-button count">Рассчитать</a>
      </form>
      <h4 className='result'>Ориентировачное время: 500</h4>


    </div>
  )
}


export default Time;
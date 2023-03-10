import React, { Component } from "react";
import axios from "axios";

class Time extends Component {

  
  state = {
    st_code_snd: "",
    st_code_rsv: "",
    date_depart_month: "",
    date_depart_day: "",
    fr_id: "",
    route_type: "",
    is_load: "",
    rod: "",
    distance: "",
    snd_org_id: "",
    rsv_org_id: "",
    snd_roadid: "",
    rsv_roadid: "",
    snd_dp_id: "",
    rsv_dp_id: "",
    articleId: null
  };

  onst_code_sndChange = e => {
    this.setState({
      st_code_snd: e.target.value
    });
  };

  onst_code_rsvChange = e => {
    this.setState({
      st_code_rsv: e.target.value
    });
  };
    
  ondate_depart_monthChange = e => {
    this.setState({
      date_depart_month: e.target.value
    });
  };
    
  ondate_depart_dayChange = e => {
    this.setState({
      date_depart_day: e.target.value
    });
  };
    
  onfr_idChange = e => {
    this.setState({
      fr_id: e.target.value
    });
  };
    
  onroute_typeChange = e => {
    this.setState({
      route_type: e.target.value
    });
  };
    
  onis_loadChange = e => {
    this.setState({
      is_load: e.target.value
    });
  };
    
  onrodChange = e => {
    this.setState({
      rod: e.target.value
    });
  };
    
  ondistanceChange = e => {
    this.setState({
      distance: e.target.value
    });
  };
    
  onsnd_org_idChange = e => {
    this.setState({
      snd_org_id: e.target.value
    });
  };
    
  onrsv_org_idChange = e => {
    this.setState({
      rsv_org_id: e.target.value
    });
  };
  
  onsnd_roadidChange = e => {
    this.setState({
      snd_roadid: e.target.value
    });
  };

  onrsv_roadidChange = e => {
    this.setState({
      rsv_roadid: e.target.value
    });
  };

  onsnd_dp_idChange = e => {
    this.setState({
      snd_dp_id: e.target.value
    });
  };

  onrsv_dp_idChange = e => {
    this.setState({
      rsv_dp_id: e.target.value
    });
  };

 
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      user_form: {
        st_code_snd: this.state.st_code_snd,
        st_code_rsv: this.state.st_code_rsv,
        date_depart_month: this.state.date_depart_month,
        date_depart_day: this.state.date_depart_day,
        fr_id: this.state.fr_id,
        route_type: this.state.route_type,
        is_load: this.state.is_load,
        rod: this.state.rod,
        distance: this.state.distance,
        snd_org_id: this.state.snd_org_id,
        rsv_org_id: this.state.rsv_org_id,
        snd_roadid: this.state.snd_roadid,
        rsv_roadid: this.state.rsv_roadid,
        snd_dp_id: this.state.snd_dp_id,
        rsv_dp_id: this.state.rsv_dp_id
      }
    };
    axios
      .post("http://46.243.227.152:8000/data", data)
      .then(res =>  this.setState({ articleId: res.data.result }) )
      .catch(err => console.log(err));

  };

 

  render() {
    const { articleId } = this.state;
    return (
      <div className="info">
        <h3>?????????????????? ?????? ????????, ?????????? ???????????????????????? ?????????????????? ?????????? ????????</h3>
        <form onSubmit={this.handleSubmit}>

          <div>
            <input id="st_code_snd"  name="st_code_snd"
            className="form-control"
            placeholder="?????????????? ??????????????????????: "
              value={this.state.st_code_snd}
              onChange={this.onst_code_sndChange} required 
            />
           </div>

          <div>
            <input id="st_code_rsv"  name="st_code_rsv"
            className="form-control"
            placeholder="?????????????? ????????????????????: "
              value={this.state.st_code_rsv}
              onChange={this.onst_code_rsvChange} required
            />
          </div>
             <div>
            <input id="date_depart_month"  name="date_depart_month"
            className="form-control"
            placeholder="?????????? ??????????????????????: "
              value={this.state.date_depart_month}
              onChange={this.ondate_depart_monthChange} required
            />
          </div>
             <div>
            <input id="date_depart_day"  name="date_depart_day"
            className="form-control"
            placeholder="???????? ??????????????????????: "
              value={this.state.date_depart_day}
              onChange={this.ondate_depart_dayChange} required
            />
          </div>
             <div>
            <input id="fr_id"  name="fr_id"
            className="form-control"
            placeholder="id ??????????: "
              value={this.state.fr_id}
              onChange={this.onfr_idChange} required
            />
          </div>
             <div>
            <input id="route_type"  name="route_type"
            className="form-control"
            placeholder="?????? ????????????????: "
              value={this.state.route_type}
              onChange={this.onroute_typeChange} required
            />
          </div>
             <div>
            <input id="is_load"  name="is_load"
            className="form-control"
            placeholder="?????????????? ????????????????????: "
              value={this.state.is_load}
              onChange={this.onis_loadChange} required
            />
          </div>
             <div>
            <input id="rod"  name="rod"
            className="form-control"
            placeholder="?????? ???????????????????? ??????????????: "
              value={this.state.rod}
              onChange={this.onrodChange} required
            />
          </div>
             <div>
            <input id="distance"  name="distance"
            className="form-control"
            placeholder="???????????????????? ??????????: "
              value={this.state.distance}
              onChange={this.ondistanceChange} required
            />
          </div>
             <div>
            <input id="snd_org_id"  name="snd_org_id"
            className="form-control"
            placeholder="id ????????????????????????????????: "
              value={this.state.snd_org_id}
              onChange={this.onsnd_org_idChange} required
            />
          </div>
             <div>
            <input id="rsv_org_id"  name="rsv_org_id"
            className="form-control"
            placeholder="id ??????????????????????????????: "
              value={this.state.rsv_org_id}
              onChange={this.onrsv_org_idChange} required
            />
          </div>
             <div>
            <input id="snd_roadid"  name="snd_roadid"
            className="form-control"
            placeholder="id ???????????? ??????????????????????: "
              value={this.state.snd_roadid}
              onChange={this.onsnd_roadidChange} required
            />
          </div>
             <div>
            <input id="rsv_roadid"  name="rsv_roadid"
            className="form-control"
            placeholder="id ???????????? ????????????????????: "
              value={this.state.rsv_roadid}
              onChange={this.onrsv_roadidChange} required
            />
          </div>
             <div>
            <input id="snd_dp_id"  name="snd_dp_id"
            className="form-control"
            placeholder="id ?????????????? ??????????????????????: "
              value={this.state.snd_dp_id}
              onChange={this.onsnd_dp_idChange} required
            />
          </div>
                  <div>
            <input id="rsv_dp_id"  name="rsv_dp_id"
            className="form-control"
            placeholder="id ?????????????? ????????????????????: "
              value={this.state.rsv_dp_id}
              onChange={this.onrsv_dp_idChange} required
            />
          </div>
          <button className="app-btn double-border-button count btn" type="submit">????????????????????</button>
          <button className="app-btn double-border-button count btn" type="submit">?????????????? ????????</button>
          <button className="app-btn double-border-button count btn" type="submit">?????????????????? ????????</button>
        </form>
        <h4 className='result'>?????????????????????????????? ??????????: {articleId}??</h4>
      </div>
    );
  }
}

export default Time;

import React, { Component } from 'react';

import TopBar from './TopBar/TopBar';
import Challenges from './Challenges/Challenges'
import axios from 'axios';
import {connect} from 'react-redux';
import {updateData} from './Actions'
import { bindActionCreators } from 'redux';

class App extends Component {

  

  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/jkcfq`)
      .then(res => {
        this.props.updateData(res.data[0].hour);
    })
}
  render() {

    console.log(this.props);
    return (
      <div className="container-fluid">
        <TopBar />
        <Challenges hour={this.props.hour}/>
      </div>
    );
  }
}

function mapStoreToProps(state){
  return{
    hour: state.hour
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {updateData:updateData},
    dispatch
  )
}

export default connect(mapStoreToProps,matchDispatchToProps)(App);

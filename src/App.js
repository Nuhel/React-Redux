import React, { Component } from 'react';

import TopBar from './TopBar/TopBar';
import Challenges from './Challenges/Challenges'
import axios from 'axios';
import {connect} from 'react-redux';

class App extends Component {

  

  state = {
    hour: null,
  }

  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/jkcfq`)
      .then(res => {
        this.setState({
            hour: res.data[0].hour
        })
    })
}
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
        <TopBar />
        <Challenges hour={this.state.hour}/>
      </div>
    );
  }
}

function mapStoreToProps(state){
  return{
    hour: state.hour
  }
}

export default connect(mapStoreToProps)(App);

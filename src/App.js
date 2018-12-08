import React, { Component } from 'react';

import TopBar from './TopBar/TopBar';
import Challenges from './Challenges/Challenges';
import ChallengeContent from './Challenges/ChallengeContent';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateData} from './Actions'
import {actionShowChallengeContent} from './Actions/actionShowChallengeContent'
import { bindActionCreators } from 'redux';

class App extends Component {

  

  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/jkcfq`)
      .then(res => {
        this.props.updateData(res.data[0].hour);
        //this.props.actionShowChallengeContent(true);
    })
}
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
        <div className = 'row'>
          <div className = 'col s12 m4 nuhel'>
            <TopBar />
            <Challenges hour={this.props.hour}/>
            <ChallengeContent showChallengeContent={this.props.showChallengeContent} actionShowChallengeContent={actionShowChallengeContent}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStoreToProps(state){
  return{
    hour: state.hour,
    showChallengeContent: state.show,
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {updateData:updateData,
    actionShowChallengeContent:actionShowChallengeContent},
    dispatch
  )
}

export default connect(mapStoreToProps,matchDispatchToProps)(App);

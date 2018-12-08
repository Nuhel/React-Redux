import React, { Component } from 'react';

import TopBar from './TopBar/TopBar';
import Challenges from './Challenges/Challenges';
import ChallengeContent from './Challenges/ChallengeContent';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateData} from './Actions'
import {actionShowChallengeContent} from './Actions/actionShowChallengeContent';
import {GetContents} from './Actions/GetContents';

import { bindActionCreators } from 'redux';

class App extends Component {

  

  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/jkcfq`)
      .then(res => {
        this.props.updateData(res.data[0].hour);
    })
}
  render() {
    
    return (
      <div className="container-fluid">
        <div className = 'row'>
          <div className = 'col s12 m4 nuhel'>
            <TopBar />
            <Challenges 
              hour={this.props.state.hour}
              getContents ={this.props.getContents}
              />
            <ChallengeContent 
              showChallengeContent={this.props.state.showChallengeContent }
              actionShowChallengeContent ={this.props.actionShowChallengeContent}
              contents = {this.props.state.contents}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStoreToProps(state){
  return{
    state: state.state
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {updateData:updateData,
    actionShowChallengeContent:actionShowChallengeContent,
    getContents:GetContents},
    dispatch
  )
}

export default connect(mapStoreToProps,matchDispatchToProps)(App);

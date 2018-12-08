import React, { Component } from 'react';

class ChallengeContent extends Component{
    render(){
        
        var className = this.props.showChallengeContent ? '':'close';
        return(
            <div className= { 'ChallengeContent ' + className}  ></div>
        );
    }
}

export default ChallengeContent;
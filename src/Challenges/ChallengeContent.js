import React, { Component } from 'react';

class ChallengeContent extends Component{
    render(){
        var className = this.props.showChallengeContent ? '':'close';
        return(
            <div className= { 'ChallengeContent ' + className}  >
                <p className="text-center">
                    <i className="pull-left fa fa-window-close" aria-hidden="true" onClick={()=>{this.props.actionShowChallengeContent(false)}}> </i> 
                    This The contents
                    </p>
            </div>
        );
    }
}

export default ChallengeContent;
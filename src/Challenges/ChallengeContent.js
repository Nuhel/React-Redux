import React, { Component } from 'react';
import SingleChallengeContent from '../Challenges/SingleChallengeContent'

class ChallengeContent extends Component{

    getValueFromObject (object){
        return object == null? "":object;
    }
    
    
    render(){
       
        var className = this.props.showChallengeContent ? '':'close';
        return this.props.contents?
        (
            
            <div className= { 'ChallengeContent ' + className}  >
                <p className="text-center">
                    <i className="pull-left fa fa-window-close" aria-hidden="true" onClick={()=>{this.props.actionShowChallengeContent(false)}}> </i> 
                    This The contents of {this.props.contents.title}
                </p>
                {
                    this.props.contents.hdes.map( (val, index) => (
                        <SingleChallengeContent 
                            key={index} 
                            props={val} 
                            Showindex={this.props.showIndex} 
                            index={index}
                            SetViewIndex= {this.props.SetViewIndex}
                            count = {this.props.contents.count}
                            />
                        )
                    )
                    
                }
            </div>
        ):('')
    }
}



export default ChallengeContent;
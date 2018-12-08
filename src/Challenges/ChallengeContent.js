import React, { Component } from 'react';

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
                            <div className='well' key={index}>
                                <p className='text-center'>{this.getValueFromObject(val.name)}</p>
                                <p >Desc1: {this.getValueFromObject(val.des_01)} </p>
                                <img className='small-img' src={this.getValueFromObject(val.link01)}/>
                                <p >des_02: {this.getValueFromObject(val.des_02)} </p>
                                <img className='small-img' src={this.getValueFromObject(val.link02)}/>
                                <p >code: {this.getValueFromObject(val.code)} </p>
                                <p >output: {this.getValueFromObject(val.output)} </p>
                                <p >popup: {this.getValueFromObject(val.popup)} </p>
                                <p >des_03: {this.getValueFromObject(val.des_03)} </p>
                                <p >qtype: {this.getValueFromObject(val.qtype)} </p>
                                <p >finish: {this.getValueFromObject(val.finish)} </p>
                                <p >status: {this.getValueFromObject(val.status)} </p>
                                <p >blankstype: {this.getValueFromObject(val.blankstype)} </p>
                            </div>
                    ))
                    }
            </div>
        ):('')
    }
}



export default ChallengeContent;
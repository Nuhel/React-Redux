import React from 'react';

const SingleChallengeContent = (val) => {
    
    let className = val.Showindex == val.index? 'open':'close';
    let button= val.count-1 != val.index? (<button onClick={()=>{val.SetViewIndex(val.index+1)}}>Next</button>): '';
    
    return (
        <div className={'well '+className}>
            <p className='text-center'>{getValueFromObject(val.name)}</p>
            <p >Desc1: {getValueFromObject(val.props.des_01)} </p>
            <img className='small-img' src={getValueFromObject(val.props.link01)}/>
            <p >des_02: {getValueFromObject(val.props.des_02)} </p>
            <img className='small-img' src={getValueFromObject(val.props.link02)}/>
            <p >code: {getValueFromObject(val.props.code)} </p>
            <p >output: {getValueFromObject(val.props.output)} </p>
            <p >popup: {getValueFromObject(val.props.popup)} </p>
            <p >des_03: {getValueFromObject(val.props.des_03)} </p>
            <p >qtype: {getValueFromObject(val.props.qtype)} </p>
            <p >finish: {getValueFromObject(val.props.finish)} </p>
            <p >status: {getValueFromObject(val.props.status)} </p>
            <p >blankstype: {getValueFromObject(val.props.blankstype)} </p>
            {button}
        </div>
    );

}

function getValueFromObject (object){
    return object == null? "":object;
}

export default SingleChallengeContent;
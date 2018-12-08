import React,{Component} from 'react';

import './style.css';


class Challenges extends Component{
    render(){
        return this.props.hour ?
        (
            <div className='challengesbar-wrapper'>
               
                        <div className="listWrapper">
                        <ul className="listUl">
                        {
                            this.props.hour.map((challenge, index) => (

                                <li 
                                key={challenge.id} 
                                className="listRow" 
                                data-event="content-opener" 
                                data-target={"#"+challenge.id}
                                onClick={()=>{this.props.getContents(this.props.hour,index)}}
                                >
                                <span className="indicator">
                                    <span className="level_number">
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                    </span>
                                    <div className="level_line brder_dotted"> </div>
                                </span>
                                <p className="content">
                                    <span>{challenge.title}</span>
                                    <span>0/{challenge.count}</span>
                                    <span>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </span>
                                </p>
                                </li>
                               
                                )
                            )
                        }
                        </ul>
                        </div>
                    
            </div>
        )
        :
        (<h1>No Data</h1>)
    }
}

export default Challenges;
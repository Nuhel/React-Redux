import React,{Component} from 'react';

import './style.css';


class Challenges extends Component{

    state = {
        hour: this.props.hour,
    }


    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.hour !== this.state.hour) {
          this.setState({ hour: nextProps.hour });
        }
      }

    render(){
        return this.state.hour ?
        (
            <div className='challengesbar-wrapper'>
                <div className='row'>
                    <div className='col s12 m4'>
                        <div className="listWrapper">
                        <ul className="listUl">
                        {this.state.hour.map((challenge, index) => (

                            <li key={challenge.id} className="listRow" data-event="content-opener" data-target={"#"+challenge.id}>
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
                           
                        ))}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
        :
        (<h1>No Data</h1>)
    }
}

export default Challenges;
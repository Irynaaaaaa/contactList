import React, {Component} from 'react';
export default class Contact extends Component{

    state = {
        active : false
    }

    onContactClick = () => {
        this.setState((state) => ({
            active : !state.active
        }))
    }
    render()
    {
        
        return(
            <div className = 'contact' onClick = {this.onContactClick}>
                 <div>{this.props.lastName}</div>
               {this.state.active &&
               <div className = 'contact'>
                   <p> name : {this.props.firstName}</p> 
                   <p> phone : {this.props.phone}</p>
                   <p> gender : {this.props.gender}</p>
                </div>
                }
            </div>
        )
    }
}
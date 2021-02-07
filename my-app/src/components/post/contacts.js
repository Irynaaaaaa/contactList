import React, {Component} from 'react';
import Contact from './fullInfo';

export default class Contacts extends Component{
    
    state = {
        active : true
    } 
      
    render(){     
            return (
                <div>
                    <div className = 'contactList'>
                        {this.props.contacts.map(item => <Contact  {...item} key = {item.lastName} />)} 
                        
                    </div>
                </div>
            );
    }
}
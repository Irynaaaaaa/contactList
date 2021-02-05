import React, {Component} from 'react';
import Contacts from './contacts';

 class MainForm extends Component{

    state = {
        contacts : [{
            firstName: "Барней",
            lastName: "Стинсовский",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робин",
            lastName: "Щербатская",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Аномный",
            lastName: "Анонимус",
            phone: "+380666666666"
        }, {
            firstName: "Лилия",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршэн",
            lastName: "Эриксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбэс",
            phone: "+380956319521",
            gender: "male"
        }],
    }


    render(){
        return (

           <div className = 'container'>
               <div className = 'header'> Contacts </div>

               <Contacts contacts = {this.state.contacts.sort(function (a, b) {
                     if (a.lastName < b.lastName) {
                        return -1;
                        }
                    if (b.lastName < a.lastName) {
                        return 1;
                        }
                        return 0;           })
            }  />
            </div>
            );
    }
}
export default MainForm;
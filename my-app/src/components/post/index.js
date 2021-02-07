import React, {Component} from 'react';
import Contacts from './contacts';
import Search from './search';

 class MainForm extends Component{

    constructor(...args) {
        super(...args);
     
        this.state = {
          contacts: [{
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
            phone: "+380666666666",
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
          filter: '',
          man: true,
          woman: true,
          unknown: true
        }
        this.ManhandleChange = this.ManhandleChange.bind(this);
        this.WomanhandleChange = this.WomanhandleChange.bind(this);
        this.UnknownhandleChange = this.UnknownhandleChange.bind(this)

    };
    
    ManhandleChange(event) {
        this.setState({man: !this.state.man});
      }
    WomanhandleChange(event) {
        this.setState({woman: !this.state.woman});
      }
 
   inputValue = (e) =>{
        this.setState({
          filter: e.target.value,
        })
      }
    
   
    UnknownhandleChange(event) {
        this.setState({unknown: !this.state.unknown});
      }
    render(){
       let array =  this.state.contacts.filter(el => el.lastName.includes(`${this.state.filter}`))
       
       array.sort(function (a, b) {
        if (a.lastName < b.lastName) {
           return -1;
           }
       if (b.lastName < a.lastName) {
           return 1;
           }
           return 0;          
        })

        
     let filtered =  array.filter(item => {
        if(!this.state.man){    
        return item.gender === 'male'
        
      }
       if(!this.state.woman){
          return (item.gender === 'female' )      
        }
        if(!this.state.unknown){
            return item.hasOwnProperty('gender')
          }
         return (true ) 
    
    }) 
       console.log(this.state)
        return (

           <div className = 'container'>
               <div className = 'header'> Contacts </div>
                <Search inputValue = {this.inputValue}/>
                <input className = 'man' type = 'checkbox' checked = {this.state.man} onChange = { this.ManhandleChange.bind(this) }  ></input><span>Man</span>
                <input className = 'woman' type = 'checkbox'  checked = {this.state.woman} onChange = {this.WomanhandleChange}></input><span>Woman</span>
                <input className = 'unknown' type = 'checkbox' checked = {this.state.unknown} onChange = {this.UnknownhandleChange} ></input><span>Unknown</span>

               <Contacts  contacts = {filtered}  />
            </div>
            );
    }
}
export default MainForm;


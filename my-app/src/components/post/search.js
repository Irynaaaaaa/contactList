import React, {Component} from 'react';


export default class Search extends Component{

    state = {
        filterSearch : ''
    };
    search = (e)=>{
        const filterSearch = e.target.value;
        this.setState({filterSearch});
    };
    render() {
        return <input  type="text" placeholder="search" onChange={this.search}></input>
    }
}
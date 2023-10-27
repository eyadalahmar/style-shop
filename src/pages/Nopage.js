import React from "react";
import { Component } from "react";
import { Link } from 'react-router-dom';

class Nopage extends Component{
    componentDidMount(){
        if(!localStorage.getItem('re'))localStorage.setItem('re','*')

    }
    render(){
        return(
<h1>404 Page Not Found <Link to='/' style={{textDecoration:'none'}}>Go to home page</Link></h1>
        )
    }
}
export default Nopage
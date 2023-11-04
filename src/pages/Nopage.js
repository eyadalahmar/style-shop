import React, { Fragment } from "react";
import { Component } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
class Nopage extends Component{
    componentDidMount(){
        if(!localStorage.getItem('re'))localStorage.setItem('re','*')

    }
    render(){
        return(<Fragment>
            <Helmet>
    <title>
      Error 404 - Page Not Found
    </title>
    <meta name='robots' content='noindex' />
  </Helmet>
<h1>404 Page Not Found <Link to='/' style={{textDecoration:'none'}}>Go to home page</Link></h1>
        </Fragment>
        )
    }
}
export default Nopage
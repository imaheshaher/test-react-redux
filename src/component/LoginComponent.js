import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import { Link, Redirect, Route } from 'react-router-dom'

 class LoginComponent extends Component {
     loginUser = () => {
        localStorage.setItem("token","123")
        alert("User is Logged in")
        

     }
  render() {
    return (
        <div>
        <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content='React redux' />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div onClick={()=>this.loginUser()}>LoginComponent </div>
      </div>
    )
  }
}
export default LoginComponent
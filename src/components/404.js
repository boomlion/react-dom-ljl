import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { hashHistory/* , Link */ } from 'react-router'
// import QueuiAnim from 'rc-queue-anim'
import "../styles/login.scss"
class Notfound extends Component {
  constructor(props, context){
    super(props)
    this.state = {
      loading: false,
      isCertificates: false,
      show: true,
    }
  }
  render() { 
    return ( 
      <div className="login-container">
        404
      </div>
     )
  }
}
 
export default Notfound;
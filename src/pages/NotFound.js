import React, { Component } from 'react'
import { Spinner } from 'reactstrap'
import errorpage from '../assets/errorpage.jpeg'
class NotFound extends Component{
  render(){
    return(
      <>
      <div id = "full-page">
        <img src = {errorpage}/>
        <h3 class="title">Page Could Not Be Found . . . 404</h3>
        <Spinner>
          Loading...
        </Spinner>
        </div>
      </>
    )
  }
}

export default NotFound

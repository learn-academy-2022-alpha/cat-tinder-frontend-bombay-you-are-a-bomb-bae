import React, { Component } from 'react'
import { Spinner } from 'reactstrap'
class NotFound extends Component{
  render(){
    return(
      <>
      <h3 class="title">Page Could Not Be Found . . . 404</h3>
      <Spinner>
    Loading...
  </Spinner>
      </>
    )
  }
}

export default NotFound

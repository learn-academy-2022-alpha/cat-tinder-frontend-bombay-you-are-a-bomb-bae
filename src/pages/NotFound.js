import React, { Component } from 'react'
import { Spinner } from 'reactstrap'
class NotFound extends Component{
  render(){
    return(
      <>
      <h1>Page Could Not Be Found . . . 404 </h1>
      <Spinner>
    Loading...
  </Spinner>
      </>
    )
  }
}

export default NotFound
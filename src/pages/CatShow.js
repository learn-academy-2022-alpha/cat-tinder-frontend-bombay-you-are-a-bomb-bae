import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'


class CatShow extends Component{
  render(){
    return(
      <>
        <h3>Cat</h3>
          <img src={this.props.cat && this.props.cat.image} />
          <h1>{this.props.cat && this.props.cat.name}</h1>
          <p>Age: {this.props.cat && this.props.cat.age}</p>
          <p>Enjoys: {this.props.cat && this.props.cat.enjoys}</p>
          <NavLink to={`/catedit/${this.props.cat && this.props.cat.id}`}>
            <Button>Edit Cat Profile</Button>
          </NavLink>
      </>
    )
  }
}

export default CatShow

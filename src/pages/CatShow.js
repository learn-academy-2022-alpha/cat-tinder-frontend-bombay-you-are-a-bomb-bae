import React, { Component } from 'react'

class CatShow extends Component{
  render(){
    return(
      <>
        <h3>Cat</h3>
          <img src={this.props.cat && this.props.cat.image} />
          <h1>{this.props.cat && this.props.cat.name}</h1>
          <p>Age: {this.props.cat && this.props.cat.age}</p>
          <p>Enjoys: {this.props.cat && this.props.cat.enjoys}</p>
      </>
    )
  }
}

export default CatShow

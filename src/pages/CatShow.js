import React, { Component } from 'react'

class CatShow extends Component{
  render(){
    let { cat } = this.props
    return(
      <>
        <h3>Cat</h3>
          <img src={cat.image} />
          <h1>{cat.name}</h1>
          <p>Age: {cat.age}</p>
          <p>Enjoys: {cat.enjoys}</p>
      </>
    )
  }
}

export default CatShow

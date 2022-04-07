import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component{
  render(){
    console.log(this.props.cats)
    return(
      <>
        <h1>Cats in your area!</h1>
        <br />
        <Col sm="6">
          {this.props.cats && this.props.cats.map(cat => {
            return <Card key={cat.id}>
              <NavLink to={`/catshow/${cat.id}`}>
                <CardTitle>
                  {cat.name}
                </CardTitle>
              </NavLink>
            </Card>
          })}
        </Col>
      </>
    )
  }
}

export default CatIndex

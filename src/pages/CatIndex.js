import React, { Component } from 'react'
import { Card, CardTitle, Col, CardGroup, CardImg, CardBody, CardSubtitle, CardText, Button, Row} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component{
  render(){
    return(
      <>
      <div id = 'full-page'>
        <h1>Cats in your area!</h1>
        <br />
        <CardGroup>
        {this.props.cats && this.props.cats.map(cat => {
            return <Card id = 'indexcard' key={cat.id}>
            <CardImg id = 'index-image'
              alt="Card image cap"
              src={cat.image}
              top
              width="100%"
            />
            <CardBody>
            <NavLink to={`/catshow/${cat.id}`}>
              <CardTitle tag="h5">
                 {cat.name}
              </CardTitle>
              </NavLink>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Age: {cat.age}
              </CardSubtitle>
            </CardBody>
          </Card>
        })}
        </CardGroup>
        </div>
      </>
    )
  }
}

export default CatIndex

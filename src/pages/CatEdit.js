import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'
// react-router import
import { Redirect } from 'react-router-dom'

class CatEdit extends Component{
  constructor(props){
    super(props)
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  }

handleChange = (e) => {
  // destructuring form out of state
  let { newCat } = this.state
  newCat[e.target.name] = e.target.value
  // setting state to the updated form content
  this.setState({newCat: newCat})
}

handleSubmit = () => {
  // a function call being passed from App.js
  this.props.updateCat(this.state.newCat, this.props.cat.id)
  this.setState({submitted: true})
}

  render(){
    return(
      <>
      <h1>Edit Your Cat</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.newCat.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            type="number"
            name="age"
            onChange={this.handleChange}
            value={this.state.newCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input
            type="text"
            name="enjoys"
            onChange={this.handleChange}
            value={this.state.newCat.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input
            type="text"
            name="image"
            onChange={this.handleChange}
            value={this.state.newCat.image}
          />
        </FormGroup>

        <Button
          name="submit"
          onClick={this.handleSubmit}
        >
          Edit Cat Profile
        </Button>
        {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`} />}
      </Form>
      </>
    )
  }
}

export default CatEdit

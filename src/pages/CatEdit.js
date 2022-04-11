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
            <div id = 'full-page'>
      <h1>Edit Your Cat</h1>
      <Form>
      <div id = 'form-edit'>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder = "What is your friend's name?"
            onChange={this.handleChange}
            value={this.state.newCat.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            type="number"
            name="age"
            placeholder = "How old is your friend?"
            onChange={this.handleChange}
            value={this.state.newCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input
            type="text"
            name="enjoys"
            placeholder="What do they like to do?"
            onChange={this.handleChange}
            value={this.state.newCat.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input
            type="text"
            name="image"
            placeholder = "What does your friend look like?"
            onChange={this.handleChange}
            value={this.state.newCat.image}
          />
        </FormGroup>
        </div>
        <Button
          name="submit"
          onClick={this.handleSubmit}
        >
          Edit Cat Profile
        </Button>
        {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`} />}
      </Form>
      </div>
      </>
    )
  }
}

export default CatEdit

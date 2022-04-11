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

// JavaScript code at the bottom of the JSX that will redirect when success is true


class CatNew extends Component{
  constructor(props){
  super(props)
  this.state = {
    newCat: {
      name: "",
      age: "",
      enjoys: "",
      image: "",
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
  this.props.createCat(this.state.newCat)
  this.setState({submitted: true})
}

  render(){
    return(
      <>
      <div id = 'full-page'>
        <Form>
          <h1>Please Add Your Cat</h1>
          <div id = 'form-new'>
          <FormGroup>
            <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                placeholder= "What's your buddies name?"
                onChange={this.handleChange}
                value={this.state.newCat.name}
              />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
              <Input
                type="text"
                name="age"
                placeholder= "How old is your friend?"
                onChange={this.handleChange}
                value={this.state.newCat.age}
              />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
              <Input
                type="text"
                name="enjoys"
                placeholder= "What do they like to do?"
                onChange={this.handleChange}
                value={this.state.newCat.enjoys}
              />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
              <Input
                type= "URL"
                name="image"
                placeholder= "Share a photo of your friend."
                onChange={this.handleChange}
                value={this.state.newCat.image}
              />
          </FormGroup>
            </div>
          <Button
            name="submit"
            onClick={this.handleSubmit}>
              Create a New Profile
          </Button>
          {this.state.submitted && <Redirect to="/catindex" />}
        </Form>
        </div>
      </>
    )
  }
}

export default CatNew

import React, { Component } from 'react'

class Home extends Component{
  render(){
    return(
      <>
      <div id = 'full-page'>
        <h3>Welcome to Purrfect Match!</h3>
        <p>Do you ever look at your cat and they look lost and lonely? You can't afford to buy another cat because you're about to get kicked out of the current place you're at. We made an app just for you. Here you can connect with people in your neighborhood and get them a playmate that you couldn't afford.</p>

        <a href="http://localhost:3001/catindex">Start looking for a cat!</a>
        </div>
      </>
    )
  }
}

export default Home

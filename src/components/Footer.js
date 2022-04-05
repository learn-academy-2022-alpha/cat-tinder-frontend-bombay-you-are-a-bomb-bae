import React, { Component } from 'react'

class Footer extends Component{
  render(){
    return(
      <>
        <footer>
          <div class="footer-content">
            <h3>Bom-BAE Developer</h3>
            <p> lorem ipsum sdka ashdasudb kasfbasbd asdbajdbasjdas sadasdb asdhjasd </p>

            <ul class="socials">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i class="fa fa-youtube"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
              </ul>
          </div>

          <div class="footer-bottom">
            <p>copyright &copy;2022 <a href="#">Paula & Jennice</a>  </p>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer

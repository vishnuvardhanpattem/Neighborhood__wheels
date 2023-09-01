
import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import "./Promotion.css"

export default function Footer1() {

  return (
    <div className='footer__container'>
      <div className='footer__container-sub1'>
        <center><img src="images1/image.bmp" alt='logo' style={{ width: "15rem", height: "14rem" }} /></center>
        <p><small>Say goodbye to long trips to rental agencies and hello to a seamless, local experience. Join our network and enjoy the ease and reliability of Neighborhood Wheels for your next journey</small></p>
      </div>
      <div className='footer__container-sub2'>
        <h3>Contact Us:</h3>
        <p><b>Email:</b>neighborhoodwheels@gmail.com</p>
        <p><b>Call:+91 9703399263</b></p>
      
        <div  className="footer__container_sub2">
        <a href="https://www.linkedin.com/" class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/" class="fa fa-linkedin"></a>
          <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
          <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
          <a href="https://www.linkedin.com/" class="fa fa-youtube"></a>
        </div>
      </div>
      <div className='footer__container-sub3'>
        <Link className="npt" to='/'>Notices</Link>
        <Link className='npt' to="/Privacypolicy">Privacy Policy</Link>
        <Link className='npt' to="/Terms">Terms</Link>
      </div>
    </div>
  )
}

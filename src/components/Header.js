import styled from "styled-components"
import React from 'react'
import { Link, Routes } from "react-router-dom"
import SignIn from "./SignIn";
import "./Header.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import PreviewProfile from "./PreviewProfile";

export default function Header() {
  const SignOut = async ()=>{
    try{
      alert("Are you sure to logout from existed account");
      await signOut(auth);
    }
    catch(error){
      console.log(error.message)
    }
  }
  return (


    <div>
      <div className="header">
        <div className="header-img">
          <img src="images1/image.bmp" />
        </div>
        <div className="header-links">
          <Link className="header-link" to="/" >Home</Link>
          <Link className="header-link" to="/signin">SignIn</Link>
          <Link className="header-link" to="/signup">SignUp</Link>
          {/* <Link className="header-link" to="/services">Services</Link> */}
          <Link className="header-link" to="/contactus">ContactUs</Link>
         <PreviewProfile />
        </div>
      </div>
    </div>


  )
}
// const Container=styled.div`
//   height:110px;
//   width:100%;
//   border:1px solid black;
//   display:flex;
//   justify-content:space-between;
//   align-items:center;
// `

// const div=styled.Link`
//   cursor:pointer;
//   text-decoration:none;
//   font-weight:bolder;
//   color:black;
//   font-size:1.3em;
//   padding-right:20px;
//   padding-left:20px;
//   &:hover{
//     text-decoration:underline;
//     font-size:1.5em;
//     transform:ease;
//   }
// `
// const Image=styled.img`
//   height:100px;
//   float:left;
//   margin-left:30px;
// `




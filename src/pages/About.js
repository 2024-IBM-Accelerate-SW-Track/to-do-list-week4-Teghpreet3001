import React, { Component } from "react";
import "./About.css";
import teghpree_profile_pic from "../assets/teghpreet_profile_pic.jpg";


export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={teghpree_profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Teghpreet Singh Mago</div>
            <div className="brief_description">
              I am Teghpreet Singh Mago, a Computer Science major at Georgia Tech, learning artificial 
              intelligence, software engineering and product managemen. I am currently a Software Engineer 
              Intern at Capital One and IBM Accelerate Program Participant. 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

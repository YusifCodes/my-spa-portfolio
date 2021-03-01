import React, { Component, useEffect } from "react";
import { gsap } from "gsap";


function About() {

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(".about-title", {
      x: -150,
      opacity: 0,
      duration: 0.75
    }, {visibility: "visible", opacity: 1, x: 0})
    .fromTo(".ab1", {
      opacity: 0,
      y: 50,
      x: -50,
      duration: 0.65
    }, {visibility: "visible", opacity: 1, y: 0, x: 0}, "-=0.15")
    .fromTo(".ab2", {
      opacity: 0,
      y: 50,
      x: -50,
      duration: 0.65
    }, {visibility: "visible", opacity: 1, y: 0, x: 0} , "-=0.35")
    .fromTo(".ab3", {
      opacity: 0,
      y: 50,
      x: -50,
      duration: 0.65
    }, {visibility: "visible", opacity: 1, y: 0, x: 0} , "-=0.35")
    .fromTo(".ab4", {
      opacity: 0,
      y: 50,
      x: -50,
      duration: 0.65
    }, {visibility: "visible", opacity: 1, y: 0, x: 0}, "-=0.35")
    .fromTo(
      ".red-line",
      {
        duration: 1
      },
      {visibility: "visible" }
    )
    .from(
      ".red-line",
      {
        duration: 1,
        opacity: 0,
        width: 0
      }, "-=0.65"
    )
  })

  return (
    <div>
      <p className='about-title'>
        find out more <span className='red-text'>about me</span>
      </p>
      <p className='about-section ab1'>
        I am a 19 year old web developer from Baku, Azerbaijan.
      </p>
      <p className='about-section ab2'>
        Creating websites and web applications is what I do. I would love to
        use my knowledge and skills to help you achieve your goal.
      </p>
      <p className='about-section ab3'>
        Besides all that, I really enjoy living an active and productive life.
      </p>
      <p className='about-section ab4'>
        My biggest motivation is seeing myself improve in different spheres of
        life.
      </p>
      <div className='red-line line-pos-about'></div>
    </div>
  );
}

export default About;

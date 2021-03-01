import React, { Component, useEffect } from "react";
import { gsap } from "gsap";

function Experience() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".experience-title",
      {
        x: -150,
        opacity: 0,
        duration: 0.75,
      },
      { visibility: "visible", opacity: 1, x: 0 }
      )
      .fromTo(
        ".d1",
        { opacity: 0, duration: 1 , x: -100},
        { opacity: 1, visibility: "visible", x: 0 }, "-=0.25"
      )
      .fromTo(
        ".languages-list li",
        { opacity: 0, duration: 1 },
        { opacity: 1, visibility: "visible", x: 0 }, "-=0.25"
      )
      .fromTo(
        ".d2",
        { opacity: 0, duration: 0.5 ,  x: 100},
        { opacity: 1, visibility: "visible", x: 0 },
        "-=0.25"
      )
      .fromTo(
        ".job",
        { opacity: 0, duration: 1 ,x: 100},
        { opacity: 1, visibility: "visible", x: 0 },
        "-=0.25"
      )
      .fromTo(
        ".red-line",
        {
          duration: 1,
        },
        { visibility: "visible" }
      )
      .from(
        ".red-line",
        {
          duration: 1,
          opacity: 0,
          width: 0,
        },
        "-=0.55"
      );
  });
  return (
    <div className='experience-grid'>
      <p className='experience-title'>what am i experinced in</p>
      <div className='section-pos'>
        <div className='languages'>
          <p className='div-title d1'>coding languages</p>
          <ul className='languages-list'>
            <li>JavaScript and React.js ✔️</li>
            <li>Python3 ✔️</li>
            <li>HTML5 ✔️</li>
            <li>CSS3 ✔️</li>
            <li>PHP ✔️</li>
          </ul>
        </div>
      </div>

      <div className='section-pos horizontal-section sec2'>
        <div className='jobs'>
          <p className='div-title d2'>work experience</p>
          <div className='job'>
            <p className='company'>Norma Systems</p>
            <p className='time-employed'>02.2020 - present</p>
            <p className='job-title'>IT helpdesk and web developer</p>
          </div>
        </div>
      </div>

      <div className='red-line line-pos-experience'></div>
    </div>
  );
}

export default Experience;

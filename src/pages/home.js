import React, { Component, useEffect } from "react";
import { gsap } from "gsap";

function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".home-title",
      {
        x: -350,
        opacity: 0,
        duration: 1.5
      },
      { visibility: "visible", x: 0, opacity: 1 }
    )
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
        }, "-=0.5"
      )
      .fromTo(
        ".home-article",
        {
          opacity: 0,
          y: 50,
          duration: 1,
        },
        { opacity: 1, y: 0, visibility: "visible" }, "-=0.5"
      )
      .fromTo(
        ".fa-ul-list li",
        {
          opacity: 0,
          duration: 1,
        },
        { opacity: 1, visibility: "visible" }, "-=0.25"
      );
  });

  return (
    <div>
      <p className='home-title'>
        hi there.<br></br>I'm.<br></br>Yusif.
      </p>

      <div className='red-line line-pos-home'></div>

      <p className='home-article'>
        I am a web developer and besides that - a very cool guy. Always
        availiable for <span className='red-text'>new projects.</span>
      </p>

      <ul className='fa-ul-list'>
        <li>
          <a href={"https://github.com/YusifCodes"}><i class='fa fa-github'></i></a>
        </li>
        <li>
          <a href={"https://www.instagram.com/malikov.yusif/?hl=ru"}><i class='fa fa-instagram'></i></a>
        </li>
        <li>
          <a href={"mailto:malikovyusif1@gmail.com"}><i class='fa fa-google'></i></a>
        </li>
      </ul>
    </div>
  );
}

export default Home;

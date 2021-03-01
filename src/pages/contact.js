import React, { Component, useEffect } from "react";
import { gsap } from "gsap";

function Contact() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".contact-title",
      {
        x: -150,
        opacity: 0,
        duration: 0.75,
      },
      { visibility: "visible", opacity: 1, x: 0 }
    )
      .fromTo(
        ".mail-title",
        { opacity: 0, duration: 1 },
        { opacity: 1, visibility: "visible" }
      )
      .fromTo(
        ".contact-section",
        { opacity: 0, duration: 1 },
        { opacity: 1, visibility: "visible" },
        "-=0.25"
      )
      .fromTo(
        ".mail-input-placehodler",
        { opacity: 0, duration: 1, x: -100 },
        { opacity: 1, visibility: "visible", x: 0 },
        "-=0.5"
      )
      .fromTo(
        ".mail-input",
        { opacity: 0, duration: 1, x: -100 },
        { opacity: 1, visibility: "visible", x: 0 },
        "-=0.5"
      )
      .fromTo(
        ".text-input-placehodler",
        { opacity: 0, duration: 1, x: -100 },
        { opacity: 1, visibility: "visible", x: 0 },
        "-=0.5"
      )
      .fromTo(
        ".text-input",
        { opacity: 0, duration: 1, x: -100 },
        { opacity: 1, visibility: "visible", x: 0 },
        "-=0.5"
      )
      .fromTo(
        ".submit-btn",
        { opacity: 0, duration: 1 },
        { opacity: 1, visibility: "visible" },
        "-=0.25"
      )
      .fromTo(
        ".red-line",
        {
          duration: 1,
        },
        { visibility: "visible" },
        "-=2"
      )
      .from(
        ".red-line",
        {
          duration: 1,
          opacity: 0,
          width: 0,
        },
        "-=0.5"
      );
  });
  return (
    <div>
      <p className='contact-title'>let's work together</p>
      <p className='mail-title'>send an e-mail</p>
      <div className='red-line line-pos-contact'></div>
      <p className='contact-section'>
        if you have any questions or offers feel free to send me a message
      </p>

      <form action="mailto:malikovyusif1@gmail.com" method="GET" target="_blank">
        <div className='mail-input-pos'>
          <p className='mail-input-placehodler'>subject</p>
          <input type='mail' className='mail-input' name="subject"></input>
        </div>

        <div className='text-input-pos'>
          <p className='text-input-placehodler'>message</p>
          <textarea className='text-input' name="body"></textarea>
        </div>
        <div className='button-pos'>
          <button className='submit-btn' type="submit" name="userSubmit" value="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;


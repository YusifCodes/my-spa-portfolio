import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BaseTemplate from "./basetemplate";
import { BrowserRouter } from "react-router-dom";

function react() {
  class Content extends React.Component {
    componentDidMount() {
      console.log("did mount");
    }
  }
  ReactDOM.render(
    <BrowserRouter>
      <BaseTemplate></BaseTemplate>
    </BrowserRouter>,
    document.querySelector(".react-container")
  );
}

react();

const navBarAnim = () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  if (hamburger && navLinks && links) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }
};

navBarAnim();

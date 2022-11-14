import React from "react";
import bALogo from "../../images/logo.svg";
import EmailInput from "../input/EmailInput";
import desktopImg from "../../images/hero-desktop.jpg";
import mobileImg from "../../images/hero-mobile.jpg";
import "./Card.css";

function Card() {
  return (
    <div className="main-card-container">
      <article className="left">
        <img src={bALogo} alt="logo" className="logo" />
        <div className="description-container">
          <h1 className="header">
            <span className="were-group">We're</span>
            <span className="cs-group">
              <br />
              coming <br /> soon
            </span>
          </h1>
          <p className="intro">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <div>
          <EmailInput />
        </div>
      </article>
      <article className="right">
        <picture className="main-img">
          <img src={desktopImg} alt="desktop" className="desktop-img" />
          <source
            media="(min-width: 768px)"
            srcset={mobileImg}
            alt="mobile"
            className="mobile-img"
          />
        </picture>
      </article>
    </div>
  );
}

export default Card;

import React from "react";
import bALogo from "../../images/logo.svg"
import emailInput from "../input/Input";
import desktopImg from "../../images/hero-desktop.jpg"
import mobileImg from "../../images/hero-mobile.jpg"

function Card() {
  return (
    <div className="main-card-container">
      <div className="main-img">
        <img
          src={desktopImg}
          alt="desktop"
          className="desktop-img"
        />
        <img
          src={mobileImg}
          alt="mobile"
          className="mobile-img"
        />
      </div>
      <main className="card-container">
        <span className="logo">
          <img src={bALogo} alt="logo" />
        </span>
        <div className="description-container">
          <h1 className="coming-soon-container">We're coming soon</h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <div>
          <input type="email"></input>
        </div>
      </main>
    </div>
  );
}

export default Card;

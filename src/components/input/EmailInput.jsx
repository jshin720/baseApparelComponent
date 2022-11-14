import React, { useState, useEffect } from "react";
import arrow from "../../images/icon-arrow.svg";
import errorIcon from "../../images/icon-error.svg";
import "./emailinput.css";

function EmailInput() {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    return setError(/\S+@\S+\.\S+/.test(email));
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (!isValidEmail(email)) {
      setMessage("Please provide a valid email");
    }
  };

  console.log("e", email);

  console.log("error", error);
  // console.log("messgae", message)

  return (
    <>
      <form className="email-container">
        <input
          type="email"
          className="email-form"
          value={email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <button type="submit">
          <img src={arrow} alt="arrow" className="arrowIcon" />
        </button>
        {/* <small className="email-message">Please provide a valid email</small> */}
        {!error ? (
          <small className="error-message" style={{ color: "red" }}>
            <img src={errorIcon} alt="errorIcon" className="errorIcon" />
            {message}{" "}
          </small>
        ) : null}
      </form>
    </>
  );
}

export default EmailInput;

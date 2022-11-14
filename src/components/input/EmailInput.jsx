import React, { useState, useEffect } from "react";
import arrow from "../../images/icon-arrow.svg";
import errorIcon from "../../images/icon-error.svg";

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
        <img src={errorIcon} alt="errorIcon"  className="errorIcon"/>
        <button type="submit">
        <img src={arrow} alt="arrow" className="arrowIcon"/>
        </button>
        <small>Please provide a valid email</small>
        {error ? <small style={{ color: "red" }}>{message} </small> : null}
      </form>
    </>
  );
}

export default EmailInput;

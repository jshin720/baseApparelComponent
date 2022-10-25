import React, { useState, useEffect } from 'react'

function EmailInput() {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const isValidEmail = (email) => {
    return setError(/\S+@\S+\.\S+/.test(email.target.value));
  };

  const handleChange = (e) => {
    console.log("e", e)
    if (!isValidEmail(e.target.value)) {
      setMessage("Email is Invalid")
    } 
  }
  
  console.log("error", error)
  console.log("messgae", message)

  return (
    <>
    <div className="email-container">
      <input type="email" className="email-form" value="email" onChange={handleChange}/>
      {error ? <h4 style={{color: "red"}}>{message} </h4>  : null}
    </div>

    </>
  )
}

export default EmailInput;
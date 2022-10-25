import React, { useState, useEffect } from 'react'

function EmailInput() {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("")


  const isValidEmail = (email) => {
    return setError(/\S+@\S+\.\S+/.test(email));
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (!isValidEmail(email)) {
        setMessage("Email is Invalid")
    }
  }
    
   console.log("e", email)
 
    console.log("error", error)
  // console.log("messgae", message)

  return (
    <>
    <div className="email-container">
      <input type="email" className="email-form" value={email} onChange={handleChange} placeholder="email"/>
      {error ? <h4 style={{color: "red"}}>{message} </h4>  : null}
    </div>

    </>
  )
}

export default EmailInput;
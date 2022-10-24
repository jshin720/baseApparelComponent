import React, { useState, useEffect } from 'react'

function emailInput() {
  const [hasError, setHasError] = useState(false);
  const [emailLength, setEmailLength] = useState(0);
  const [correctFormat, setCorrectFormat] = useState(true);

  const checkFormat = () => {

  };

  const checkLength = () => {

  }

  const goodEmail = () => {

  }

  return (
    <>
    <form></form>
      <input type="email" className="email-form" value="email"/>
    </>
  )
}

export default emailInput;
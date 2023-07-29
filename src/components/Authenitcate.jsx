import React from 'react'
import { useState } from 'react'

const Authenitcate = ({ token }) => {
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [userName, setUserName] = useState(null)

  async function handleClick() {
    console.log('clicked', token)
    try {
      const response = await fetch(
        'https://fsa-jwt-practice.herokuapp.com/authenticate',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const result = await response.json()
      setSuccessMessage(result.message)
      setUserName(result.data.username)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && <p>{`${userName}, ${successMessage}`}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  )
}

export default Authenitcate

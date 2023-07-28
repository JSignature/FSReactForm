import React from 'react'
import { useState } from 'react'

const Authenitcate = ({ token }) => {
  const [error, setError] = useState(null)

  try {
    async function handleClick() {
      console.log('clicked')
    }
  } catch (error) {
    setError(error.message)
  }

  return (
    <>
      <h2>Authenitcate</h2>
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  )
}

export default Authenitcate

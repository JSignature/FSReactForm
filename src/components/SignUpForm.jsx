import React, { useState } from 'react'

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <h2>Sign Up Here</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{' '}
          <input
            value={username}
            onChange={e => {
              setUsername(e.target.value)
            }}
          />
        </label>
        <label>
          Password:{' '}
          <input
            value={password}
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm

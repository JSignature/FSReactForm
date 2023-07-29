import './App.css'
import Authenitcate from './components/Authenitcate'
import SignUpForm from './components/SignUpForm'
import React, { useState } from 'react'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenitcate token={token} setToken={setToken} />
    </>
  )
}

export default App

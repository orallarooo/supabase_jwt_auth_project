import React, { useState } from 'react'
import { Link } from 'react-router';

import supabase from "../helper/supabaseClient"

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    })

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      setMessage("User Acc Created!");
    }

    setEmail("")
    setPassword("")
  }



  return (
    <div>
      <h2>Registe</h2> <br />

      {message && <span>{message}</span>}

      <form action="" onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' required /><br />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' required /><br />

        <button type='submit'>Create Account</button>
      </form>
      <span>Already have an account?</span>
      <Link to='/login'>Log In</Link>
    </div>
  )
}

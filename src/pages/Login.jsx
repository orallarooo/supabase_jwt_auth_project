import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';

import supabase from "../helper/supabaseClient"

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      navigate('/dashboard');
      return;
    }


  }


  return (
    <div>
      <h2>Log In</h2> <br />

      {message && <span>{message}</span>}

      <form action="" onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' required /><br />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' required /><br />

        <button type='submit'>Log In</button>
      </form>
      <span>Don't have an account?</span>
      <Link to='/register'>Register</Link>
    </div>
  )
}


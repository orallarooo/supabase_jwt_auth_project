import React from 'react'

import { Link } from 'react-router'

export function Home() {
  return (
    <div>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}


import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from './../../context/authContext'

import Alert from './Alert'

function Login() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { login, myAlert, setMyAlert } = useAuth()

  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async e => {

    e.preventDefault()

    setMyAlert('')
    try {
      await login(user.email, user.password)
      return navigate('/dashmin')
    } catch (error) {
      return setMyAlert(error.message)
    }
  }

  return (
    <div className='h-screen flex bg-tertiary'>

      <div className='w-full max-w-xs m-auto'>

        {
          (myAlert) && <Alert message={myAlert} />
        }

        <h2 className='mb-12 text-3xl font-bold'>
          Welcome, Enrique...
        </h2>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='Label-input'>
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='youremail@company.ltd'
              className='input'
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='password'
              className='Label-input'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='input'
              onChange={handleChange}
              placeholder="******"
              required
            />
          </div>

          <button
            type='submit'
            className='btn px-5 py-2 bg-accent hover:bg-secondary-hover'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"

// const RAILS_API = "http://localhost:4000/"

export const Register = ({ setUser, setLoggedin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value)
    if (e.target.name === "password") setPassword(e.target.value)
  }

  const handleSignup = (e) => {
    e.preventDefault()
    const signupObj = {
      method: "POST",
      headers: {
            "Content-type": "application/json",
            Accepts: "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
      }
      // console.log(signupObj)
    fetch("signup", signupObj)
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        setLoggedin(true)
        history.push("/") 
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className='login-form'>
      <h1>Sign Up******************************************************</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className='mb-4' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={handleChange}
            name='email'
            value={email}
          />
        </Form.Group>

        <Form.Group className='mb-4' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={handleChange}
            name='password'
            value={password}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Signup
        </Button>
      </Form>
    </div>
  )
}

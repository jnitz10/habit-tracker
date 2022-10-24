import { useState } from 'react'
import axios from 'axios'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  console.log(formFields)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:9000/users/login', {
        email,
        password
      })
        .then(function (response) {
          console.log(response)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <label>Password</label>
        <input
          type='text'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )


}

export default SignInForm
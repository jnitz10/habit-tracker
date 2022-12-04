import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signup } from "../../actions/auth"

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { name, email, password, confirmPassword } = formFields

  const dispatch = useDispatch()



  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      dispatch(signup(name, email, password))
      setFormFields(defaultFormFields)
      console.log('sign up successful')
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type='text'
          required
          onChange={handleChange}
          name='name'
          value={name}
        />

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
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
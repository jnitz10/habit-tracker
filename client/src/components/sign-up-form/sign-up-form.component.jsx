import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { name, email, password, confirmPassword } = formFields
  const { signUp } = useContext(AuthContext)


  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await signUp(name, email, password)
      setFormFields(defaultFormFields)
    } catch(error) {
      console.log(error)
    }
  }

/*   const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:9000/users/', {
        name,
        email,
        password
      })
        .then(function (response) {
          console.log(response)
        })
    } catch (error) {
      console.log(error)
      console.log({ name, email, password })
    }
  }  */

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
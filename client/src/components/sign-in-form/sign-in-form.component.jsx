import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/auth'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const dispatch = useDispatch()

  const { message } = useSelector(state => state.message)
  const { isLoggedIn } = useSelector(state => state.auth)


  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(login(email, password))
      .then(() => {
        setFormFields(defaultFormFields)
      }
    )
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
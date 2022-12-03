import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div>
      <h1>This is the sign in page</h1>
      <SignInForm />
      <Link className="signupLink" to="/sign-up">
        No account? Sign up here!
      </Link>
    </div>

  )
}

export default SignIn
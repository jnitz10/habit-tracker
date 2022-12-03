import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'
import { AuthContext } from "../../contexts/auth.context"
import { useContext } from "react"

const Navigation = () => {
  const { currentUser, logout } = useContext(AuthContext)

  return (
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
          Home
        </Link>
        <div className='nav-links-container'>
          {
            currentUser ? (
              <span className='nav-link' onClick={() => logout()}>
                Logout
              </span>
            ) : (
              <Link className='nav-link' to='/sign-in'>
                Sign In
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'
import {useSelector, useDispatch} from 'react-redux'
import { logout } from "../../actions/auth"

const Navigation = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()


  return (
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
          Home
        </Link>
        <div className='nav-links-container'>
          {isLoggedIn ? (
            <span onClick={() => dispatch(logout())}>sign out</span>)
          :(
            <Link className='nav-link' to='/sign-in'>
              Sign In
            </Link>)
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
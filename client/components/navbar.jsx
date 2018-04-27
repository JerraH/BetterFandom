import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light ">

      {isLoggedIn ? (

          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><a className="navbar-brand" href="#">Better Fandom</a></li>
          {/* The navbar will show these links after you log in */}

            <li className="nav-item">
              <Link to="/home" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={handleClick}>
                Logout
              </a>
            </li>
            <li className="nav-item">
              <Link to="/blog-feed" className="nav-link" >Feed</Link>
            </li>
          </ul>

      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/explore">Explore</Link>
        </div>
      )}
      </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

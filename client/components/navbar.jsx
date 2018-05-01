import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn, user }) => (

    <nav className="navbar navbar-expand-md">

      {isLoggedIn ? (

          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><a className="navbar-brand" href="/home">Better Fandom</a></li>
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
            <li className="nav-item">
              <Link to={`/messages`} className="nav-link" >Messages</Link>
            </li>
            <li className="nav-item">
              <Link to={`/messages/${user.id}/publicmessages`} className="nav-link" >Shouts</Link>
            </li>
          </ul>

      ) : (
        <ul className="navbar-nav mr-auto">
        <li className="nav-item"><a className="navbar-brand" href="/home">Better Fandom</a></li>
          {/* The navbar will show these links before you log in */}
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/explore">Explore</Link></li>
        </ul>
      )}
      </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
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

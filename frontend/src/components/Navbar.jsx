// Test Bed for the navbar this is NOT important and is never used <-------------------------
// IGNORE
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faArrowRightFromBracket, faUser, faUserPlus} from '@fortawesome/free-solid-svg-icons';

import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

//Specific css for this component
import '../stylesheets/Navbar.css'; 

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/navbar')
    }

    return ( 
        <navbar>
          <div className='nav-brand'>
            <Link to = '/' style={{textDecoration: 'none'}}>
              <h1>Hungry</h1>
            </Link>
          </div>
          <ul className='nav-pages'>
            <li className='nav-pages-item'>
              <Link to ='/foodsuggester' style={{textDecoration: 'none'}}>
                <h2>Idea Generator</h2>
              </Link>
            </li>
            <li className='nav-pages-item'>
              <Link to = '/cookbook' style={{textDecoration: 'none'}}>
                <h2>Cookbook</h2>
              </Link>
            </li>
            <li className='nav-pages-item'>
              <Link to = '/menusdash' style={{textDecoration: 'none'}}>
                <h2>Menus</h2>
              </Link>
            </li>
          </ul>
          <ul className='nav-acc'>
            {user ? (
            <>
              <li>
                <button className='nav-acc-btn' onClick={onLogout}>
                  <FontAwesomeIcon 
                    icon = {faArrowRightFromBracket}
                    style = {{ textDecoration: 'none', backgroundColor: 'transparent', color: 'white'}}>
                  </FontAwesomeIcon>
                  <h2>Logout</h2>
                </button>
              </li>
              <li className='nav-acc-item'>
                <Link to = '/account/info' style={{textDecoration: 'none'}}>
                  <FontAwesomeIcon 
                    icon = {faUser} 
                    style = {{ textDecoration: 'none', backgroundColor: 'transparent', color: 'white'}}>
                  </FontAwesomeIcon>
                  <h2>Account</h2>
                </Link>
              </li>
            </>
            ) : (
            <>
              <li className='nav-acc-item'>
                <Link to ='/login' style={{textDecoration: 'none'}}>
                  <FontAwesomeIcon 
                    icon = {faArrowRightToBracket} 
                    style = {{ textDecoration: 'none', backgroundColor: 'transparent', color: 'white'}}>
                  </FontAwesomeIcon>
                  <h2>Login</h2>
                </Link>
              </li>
              <li className='nav-acc-item'>
                <Link to = '/createuser' style={{textDecoration: 'none'}}>
                  <FontAwesomeIcon 
                    icon = {faUserPlus} 
                    style={{textDecoration: 'none', backgroundColor: 'transparent', color: 'white'}}>
                  </FontAwesomeIcon>
                  <h2>Create Account</h2>
                </Link>
              </li>
            </>)}
          </ul>
        </navbar>
    )
}
export default Navbar;

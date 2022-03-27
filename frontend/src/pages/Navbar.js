// Test Bed for the navbar this is NOT important and is never used <-------------------------
// IGNORE
import React from 'react';

//Specific css for this component
import './Navbar.css'; 
const Navbar = () => {
    return ( 
        <div className='navbar'>
          <div className='navbar-brand'>
            <h1>Hungry</h1>
          </div>
          <div className='navbar-items'>
            <a href='' className='navbar-item1'>Placeholder</a>
            <a href='/login' className='navbar-item2'>Login</a>
            <a href='/createuser' className='navbar-item3'>Create Account</a>
          </div>
          <div className='navbar-account'>Profile Picture</div>
        </div>
    )
}
export default Navbar;

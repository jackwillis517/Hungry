import React from 'react'
import './Navbar.css'; 
//import { Navbar, Nav, NavItem, NavLink, Collapse, NavbarBrand} from 'reactstrap'
// import Login from './pages/Login.js'
// import CreateUser from './pages/CreateUser.js'

const Navbar = () => {
    return ( 
        // <Route path="/login" element={<Login/>} />
        // <Route path="/createuser" element={<CreateUser/>} />
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

// {/* <Navbar light expand="md">
//           <NavbarBrand className='navbar-brand' href="/">Hungry</NavbarBrand>
//           <Collapse navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem className='navbar-item'>
//                 <NavLink href="">Placeholder</NavLink>
//               </NavItem>
//               <NavItem className='navbar-item'>
//                 <NavLink href="/login">Login</NavLink>
//               </NavItem>
//               <NavItem className='navbar-item'>
//                 <NavLink href="/createuser">Create Account</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar> */}
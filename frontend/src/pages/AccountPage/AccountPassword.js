import React, { useState } from 'react'
import './AccountInfo.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const AccountInfo = () => {

    
    return ( 
        <div>
        <div className='navbar'>
                    <div className='navbar-brand'>
                        <h1>Hungry</h1>
                    </div>
                    <div className='navbar-items'>
                        <a href='' className='navbar-item1'>Home</a>
                        <a href='/foodSuggester' className='navbar-item2'>Idea Generator</a>
                        <a href='' className='navbar-item3'>Cookbook</a>
                    </div>
                    <div className='navbar-account'>Profile Picture</div>
                </div>
        <body>
          
            <div class="flex-container">
                <div className='menu-option'>
                    <ul>
                        <li><a href="AccountInfo">Edit Profile</a></li>
                        <li><a href="AccountPassword">Change Password</a></li>
                    </ul>
                </div>

                <div className='edit-password'>

                    <form className='current-password'>
                        <h1 className='header'>Current Password</h1>
                        <div className='text'>
                            <input type="text" id="myText" placeholder='Enter current password...'></input>
                            <input type="submit" className='button' value="Change"></input>
                        </div>
                    </form>

                    <form className='new-password'>
                        <h1 className='header'>New Password</h1>
                        <div className='text'>
                            <input type="text" id="myText" placeholder='Enter new password...'></input>
                            <input type="submit" className='button' value="Change"></input>
                        </div>
                    </form>

                    <form className='confirm-password'>
                        <h1 className='header'>Confirm Password</h1>
                        <div className='text'>
                            <input type="text" id="myText" placeholder='confirm passowrd...'></input>
                            <input type="submit" className='button' value="Change"></input>
                        </div>
                    </form>


                </div>
            </div>
        </body>
        </div>
    )
  } 
export default AccountInfo;
import React, { useState } from 'react'
import './AccountInfo.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const AccountInfo = () => {

    <div></div>
    return ( 
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
    )
  } 
export default AccountInfo;
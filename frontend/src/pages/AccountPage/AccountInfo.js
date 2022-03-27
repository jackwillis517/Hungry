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

                <div className='edit-profile'>

                    <form className='photo' method="post" enctype="multipart/form-data">
                        <input type="file" name="file" id="file"/>
                    </form>

                    <form className='edit-username'>
                        <h1 className='header'>USERNAME</h1>
                        <div className='text'>
                            <input type="text" id="myText" placeholder='New username...'></input>
                            <input type="submit" className='button' value="Change"></input>
                        </div>
                    </form>

                    <form className='edit-bio'>
                        <h1 className='header'>BIO</h1>
                        <div className='text'>
                            <input type="text" id="myText" placeholder='Bio...'></input>
                            <input type="submit" className='button' value="Change"></input>
                        </div>
                    </form>

                    <form className='edit-email'>
                        <h1 className='header'>EMAIL</h1>
                        <div className='text'>
                            <input type="text" id="myText" placeholder='New email...'></input>
                            <input type="submit" className='button' value="Change"></input>
                        </div>
                    </form>

                    <form className='edit-number'>
                        <h1 className='header'>Phone Number</h1>
                        <div className='text'>
                            <input type="text" id="myText" placeholder='New phone number...'></input>
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
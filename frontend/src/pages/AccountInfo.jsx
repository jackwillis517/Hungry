import React, { useState } from 'react'
import '../stylesheets/AccountInfo.css';

const AccountInfo = () => {
    return ( 
        <div>
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
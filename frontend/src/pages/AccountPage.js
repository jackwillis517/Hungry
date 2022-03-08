import React, { useState } from 'react'
import './AccountPage.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const AccountPage = () => {

    <div></div>
    return ( 
        <body>
          
            <div class="flex-container">
                <div className='menu-option'>
                    <ul>
                        <li><a href="#edit">Edit Profile</a></li>
                        <li><a href="#password">Change Password</a></li>
                        <li><a href="#payments">Payments</a></li>
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
    )
  } 
export default AccountPage;
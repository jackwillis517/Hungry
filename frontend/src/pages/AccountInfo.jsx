import React, { useState } from 'react'
import '../stylesheets/AccountInfo.css';



const AccountInfo = () => {
    return ( 
        <div class="flex-container">
            <div className='menu'>
                <ul>
                    <li><a href="AccountInfo">Edit Profile</a></li>
                    <li><a href="AccountPassword">Change Password</a></li>
                </ul>
            </div>
            <div className='profile'>
                <div className='username'>
                    <h2 className='header'>Username: </h2>
                    <h3>Name</h3>
                    <input type="submit" className='button' value="Change"></input>
                </div>
                <div className='email'>
                    <h2 className='header'>Email: User123@mail.com</h2>
                    <input type="submit" className='button' value="Change"></input>
                </div>
            </div>
        </div>
    )
  } 
export default AccountInfo;
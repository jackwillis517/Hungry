import React, { useState, useEffect } from 'react'
import '../stylesheets/AccountSecurity.css'
import {toast} from 'react-toastify'
import axios from 'axios';

const AccountSecurity = () => {
    const [email, setEmail] = useState('')
    const [newpassword, setNewPassword] = useState('')
    const [newpassword2, setNewPassword2] = useState('')
    const user = JSON.parse(window.localStorage.getItem('user'))
    
    useEffect(() => {
        setEmail(user.email)
    }, [])

    const submitNewPass = (e) => {
        e.preventDefault()
        if (newpassword !== newpassword2){
            toast.error('Passwords do not match')
        } else {
            const userData = ({
                email: email,
                newpassword: newpassword, 
                newpassword2: newpassword2
            })
            axios.put('http://localhost:5000/api/users/account/resetpass', userData)
                .then((response) => {
                    console.log(response.status)
                    toast.success('Password changed')
                    setNewPassword('')
                    setNewPassword2('')
                })
                .catch((response) => {
                    console.log(response.status)
                })
        }
       
    }

    return ( 
        <div className="changepass-flex-container">
            <div className='changepass-nav-container'>
                <div className='changepass-menu'>
                    <a href="info">Personal info</a>
                    <a href="security">Security</a>
                </div>
            </div>
            <div className='changepass-content-container'>
                <h1>Security</h1>
                <div className='changepass'>
                    <form className='changepass-form' onSubmit={submitNewPass}>
                        <h2 className='changepass-subtitle'>Change Password</h2>
                        <h3>New Password</h3>
                        <input 
                            value = {newpassword} 
                            onChange = {(e) => setNewPassword(e.target.value)} 
                            type='password' 
                            placeholder='' 
                        />
                        <h3>Confirm New Password</h3>
                        <input
                            value = {newpassword2}
                            onChange = {(e) => setNewPassword2(e.target.value)} 
                            type='password' 
                            placeholder='' 
                        />
                        <button className='changepass-button' type='submit'>Change</button>
                    </form>    
                </div>
            </div>
        </div>
         
    
    )
  } 
export default AccountSecurity;
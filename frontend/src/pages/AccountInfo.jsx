import React, { useState, useEffect } from 'react'
import '../stylesheets/AccountInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const AccountInfo = () => {
    const [email, setEmail] = useState('')
    const [newusername, setNewUsername] = useState('')
    const [newemail, setNewEmail] = useState('')
    
    useEffect(() => {
        let inputMoved = false
        const editInfo = document.querySelector('.editInfo')
        const editInfoBtn = document.querySelector('.editInfoBtn')
        editInfoBtn.addEventListener('click', () => {
            if (!inputMoved){
                editInfo.classList.add('active')
                inputMoved = true
            } else {
                editInfo.classList.remove('active')
                inputMoved = false
            }
        })
    }, [])
        
    const user = JSON.parse(window.localStorage.getItem('user'))

    const onSubmitUsername = () => {
        setEmail(user.email)
        const userData = {
            email: email,
            newusername: newusername
        }
        axios.put('http://localhost:5000/api/users/account/resetname', userData)
        .then((response) => {
            console.log(response)
        })
        .catch((response) => {
            console.log(response)
        })
    }
    
    const onSubmitEmail = () => {
        setEmail(user.email)
        const userData = {
            email: email, 
            newemail: newemail
        }
        axios.put('http://localhost:5000/api/users/account/resetemail', userData)
        .then((response) => {
            console.log(response)
        })
        .catch((response) => {
            console.log(response)
        })
    }

    return ( 
        <div className="flex-container">
            <div className='nav-container'>
                <div className='menu'>
                    <a href="info">Personal info</a>
                    <a href="security">Security</a>
                </div>
            </div>
            <div className='content-container'>
                <h1>Personal info</h1>
                <div className='profile'>
                    <button className='editInfoBtn'>
                        <FontAwesomeIcon 
                            icon = {faPen}
                            style = {{ textDecoration: 'none', backgroundColor: 'transparent', color: 'white'}}>
                        </FontAwesomeIcon>
                    </button>
                    <div className='username'>
                        <h3 className='header'>USERNAME</h3>
                        <h2>{user.name}</h2>
                    </div>
                    <div className='email'>
                        <h3 className='header'>EMAIL</h3>
                        <h2>{user.email}</h2>
                    </div>
                </div>
            </div>
            <div className='editInfo'>
                <div className='editName'>
                    <form className='changename-form' onSubmit={onSubmitUsername}>
                        <h2 className='changename-subtitle'>Change Username</h2>
                        <h3>New Username</h3>
                        <input
                            value = {newusername}
                            id = 'newusername'
                            name = 'newusername'
                            onChange = {(e) => {setNewUsername(e.target.value)}} 
                            type='text' 
                            placeholder='' 
                        />
                        <button className='changename-button' type='submit'>Change</button>
                    </form> 
                </div>
                <div className='editEmail'>
                    <form className='changeemail-form' onSubmit={onSubmitEmail}>
                        <h2 className='changeemail-subtitle'>Change Email</h2>
                        <h3>New Email</h3>
                        <input
                            value = {newemail}
                            id = 'newemail'
                            name = 'newemail'
                            onChange = {(e) => {setNewEmail(e.target.value)}} 
                            type='password' 
                            placeholder='' 
                        />
                        <button className='changeemail-button' type='submit'>Change</button>
                    </form> 
                </div>
            </div>
        </div>
    )
  } 
export default AccountInfo;
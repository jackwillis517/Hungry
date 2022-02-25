import React, { useState } from 'react'
import axios from 'axios'



// import { BrowserRouter, Route } from 'react-router-dom'
// import Login from './pages/Login.js'

const App = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: password
        }
        axios.post("http://localhost:5000/api/users/login", userData)
        .then((response) => {
            console.log(response.status)
            console.log(response.data.token)
        })
    }

    return ( 
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    type="text" 
                    placeholder="Email" 
                />
                <br/>
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password" 
                />
                <br/>
                <input type="submit" value="Login" />
                <br/>
                
            </form>
        </div>
    )
}

export default App


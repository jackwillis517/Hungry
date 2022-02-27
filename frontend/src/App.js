import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.js'
import CreateUser from './pages/CreateUser.js'

const App = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/createuser" element={<CreateUser/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App


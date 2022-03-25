import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.js'
import CreateUser from './pages/CreateUser.js'
import Navbar from './pages/Navbar.js'
import AccountPage from './pages/AccountPage.js' 
import FoodSuggester from './pages/FoodSuggester.js'
import MenusDashboard from './pages/MenusDashboard.js'
import FoodSuggester from './pages/FoodSuggester.js'

const App = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/createuser" element={<CreateUser/>} />
                <Route path="/navbar" element={<Navbar/>} />
                <Route path="/AccountPage" element={<AccountPage/>} />
                <Route path="/foodSuggester" element={<FoodSuggester/>} />
                <Route path="/MenusDashboard" element={<MenusDashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App


import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.js'
import CreateUser from './pages/CreateUser.js'
import Navbar from './pages/Navbar.js'
import MenusDashboard from './pages/MenusDashboard.js'
import AccountPage from './pages/AccountPage.js'
import CreateFoodIdea from './pages/CreateFoodIdea.js'


const App = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/createuser" element={<CreateUser/>} />
                <Route path="/navbar" element={<Navbar/>} />
                <Route path="/menusdash" element={<MenusDashboard/>} />
                <Route path="/accountpage" element={<AccountPage/>} />
                <Route path="/createfoodidea" element={<CreateFoodIdea/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App


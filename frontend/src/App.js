import React from 'react';

//React router import, react routing is used for page routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//----------------------------------------Component Imports--------------------------------------//
//Imports the Login component from Login.jsx, this is where a user can login to an existing account
import Login from './pages/Login.jsx';
//Imports the Create User component from CreateUser.jsx, this is where a user can create an account
import CreateUser from './pages/CreateUser.jsx';
//Imports the Navbar component from Navbar.jsx, this component is a test bench for the navbar and is never
//actually used directly
import Navbar from './components/Navbar.jsx';
//Imports the Food Suggester component from FoodSuggester.jsx, this is where users can select randomly
//suggested food items
import FoodSuggester from './pages/FoodSuggester.jsx';
//Imports the Menus Dashboard component from MenusDashboard.jsx, this is where a user can see and access
//the menus they have created which are a kind of playlist of food items a user might reference in the future
import MenusDashboard from './pages/MenusDashboard.jsx';
//Imports the Menu Page component from MenuPage.jsx, this is where a user can see inside a menu
//to see the food items contained, and add or edit this list
import MenuPage from './pages/MenuPage.jsx';
//Imports the Create Food Idea component from CreateFoodIdea.jsx, this is where a user can create a new
//food idea, which can be added to specific menus or the users cookbook in the future
import CreateFoodIdea from './pages/CreateFoodIdea.jsx';
//Imports Account Info and Account Password respectivaly, these are used when a user wants to make changes
//to there profile information
import AccountInfo from './pages/AccountInfo.jsx';
import AccountPassword from './pages/AccountSecurity.jsx';
//Imports the Forgot Password component from ForgotPass.jsx, this should allow users to auth their identity
//so a password change can happen but it will not be done in T - 1.5 weeks
import ForgotPass from './pages/ForgotPass.jsx';
//Imports the Modify Food Idea component from ModifyFoodIdea.jsx, this allows the user to modify or delete
//an existing food idea
import ModifyFoodIdea from './pages/ModifyFoodIdea.jsx';
//Imports the New Menu component from NewMenu.jsx, this allows a user to create a new menu to add food items
//to
import NewMenu from './pages/NewMenu.jsx';
//Imports the Food Card component from FoodCard.jsx, this is used to display food items across various 
//other components
import FoodCard from './pages/FoodCard.jsx';
//Imports the Cookbook Page component from CookbookPage.jsx
import CookbookPage from './pages/CookbookPage.jsx';
//Imports the Home Page component from Home.jsx
import Home from './pages/Home.jsx';

import './stylesheets/app.css';
//-----------------------------------------------------------------------------------------------//

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className='container'>
                    <div className='nav'>
                        <Navbar />
                    </div>
                    <div className='content'>
                        <Routes>
                            <Route path="" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/createuser" element={<CreateUser />} />
                            <Route path="/foodsuggester" element={<FoodSuggester />} />
                            <Route path="/cookbook" element={<CookbookPage />} />
                            <Route path="/menusdash" element={<MenusDashboard />} />
                            <Route path="/menuPage" element={<MenuPage />} />
                            <Route path="/createfoodidea" element={<CreateFoodIdea />} />
                            <Route path="/account/info" element={<AccountInfo />} />
                            <Route path="/account/security" element={<AccountPassword />} />
                            <Route path="/forgotpassword" element={<ForgotPass />} />
                            <Route path="/modifyfoodidea" element={<ModifyFoodIdea />} />
                            <Route path="/newMenu" element={<NewMenu />} />
                            <Route path="/foodCard" element={<FoodCard />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
            <ToastContainer />
        </>
    )
}

export default App

//To Whom It May Concern,
//If you are reading this welcome to component hell, yes there are a lot of imports and some of them
//are propably (spelled that wrong) redundent. Also, if your using this app you better not forget your password, we'll be
//lucky if the basic components function for the demo a week and a half away fml.
//
//Welcome to Hungry (we hunger for more time)

//Secret Project CODENAME in binary (the idea for this app came from tinder):
//01100110
//01101111
//01101111
//01100100
//01110000
//01101111
//01110010
//01101110
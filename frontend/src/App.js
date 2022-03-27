import React from 'react'

//React router import, react routing is used for page routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//----------------------------------------Component Imports--------------------------------------//
//Imports the Login component from Login.js, this is where a user can login to an existing account
import Login from './pages/Login.js'
//Imports the Create User component from CreateUser.js, this is where a user can create an account
import CreateUser from './pages/CreateUser.js'
//Imports the Navbar component from Navbar.js, this component is a test bench for the navbar and is never
//actually used directly
import Navbar from './pages/Navbar.js'
//Imports the Food Suggester component from FoodSuggester.js, this is where users can select randomly
//suggested food items
import FoodSuggester from './pages/FoodSuggester.js'
//Imports the Menus Dashboard component from MenusDashboard.js, this is where a user can see and access
//the menus they have created which are a kind of playlist of food items a user might reference in the future
import MenusDashboard from './pages/MenusDashboard.js'
//Imports the Create Food Idea component from CreateFoodIdea.js, this is where a user can create a new
//food idea, which can be added to specific menus or the users cookbook in the future
import CreateFoodIdea from './pages/CreateFoodIdea.js'
//Imports Account Info and Account Password respectivaly, these are used when a user wants to make changes
//to there profile information
import AccountInfo from './pages/AccountPage/AccountInfo.js' 
import AccountPassword from './pages/AccountPage/AccountPassword.js'
//Imports the Forgot Password component from ForgotPass.js, this should allow users to auth their identity
//so a password change can happen but it will not be done in T - 1.5 weeks
import ForgotPass from './pages/ForgotPass.js' 
//Imports the Modify Food Idea component from ModifyFoodIdea.js, this allows the user to modify or delete
//an existing food idea
import ModifyFoodIdea from './pages/ModifyFoodIdea.js'
//Imports the New Menu component from NewMenu.js, this allows a user to create a new menu to add food items
//to
import NewMenu from './pages/NewMenu.js'
//Imports the Food Card component from FoodCard.js, this is used to display food items across various 
//other components
import FoodCard from './pages/FoodCard.js'
//-----------------------------------------------------------------------------------------------//

const App = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/createuser" element={<CreateUser/>} />
                <Route path="/navbar" element={<Navbar/>} />
                <Route path="/foodSuggester" element={<FoodSuggester/>} />
                <Route path="/menusdash" element={<MenusDashboard/>} />
                <Route path="/createfoodidea" element={<CreateFoodIdea/>} />
                <Route path="/AccountPage/AccountInfo" element={<AccountInfo/>} />
                <Route path="/AccountPage/AccountPassword" element={<AccountPassword/>} />
                <Route path="/forgotPassword" element={<ForgotPass/>} />
                <Route path="/modifyFoodIdea" element={<ModifyFoodIdea/>} />
                <Route path="/newMenu" element={<NewMenu/>} />
                <Route path="/foodCard" element={<FoodCard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

//To Whom It May Concern, 
//If you are reading this welcome to component hell, yes there are a lot of imports and some of them
//are propably (spelled that wrong) redundent. Also, if your using this app you better not forget your password, we'll be
//lucky if the basic components function for the demo a week and a half away fml.
//
//Welcome to Hungry (we hunger for more time)

//Secret Project CODENAME in binary:
//01100110
//01101111	
//01101111	
//01100100
//01110000	
//01101111
//01110010
//01101110
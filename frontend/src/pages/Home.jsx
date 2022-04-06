import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import FoodCard from './FoodCard';

//CSS for this specific components
import '../stylesheets/Home.css'; 

const Home = () => {
    
    //Item to render to page please hook up to backend, this is sent as a prop to FoodCard
    const item = {  name: "Burrito", 
                    filterType: "Beef", 
                    description: "Heaven wrapped in a tortilla",
                 }
   
    const {user} = useSelector((state) => state.auth)
    const userObj = JSON.parse(window.localStorage.getItem('user'))
    return (
        <div>
            {user ? (
                <>
                <div className='home-flex-container-logged-in'>
                    <h1 className='h1-logged-in'>Welcome {userObj.name}!</h1>
                    <div className='food-item-logged-in'>
                        <h3 className='h2-logged-in'>Recently Add Food Item</h3>
                        <FoodCard item={item} />
                    </div>
                </div>
                </>
            ) : (
                <>
                <div className='home-flex-container-logged-out'>
                    <h1 className='h1-logged-out'>Welcome to Hungry</h1>
                    <h3 className='h3-logged-out-text'>Hungry is a food suggestion platform that allows users to select from random food ideas and save them for later.
                    Our goal is to solve the "What do I want for dinner?" question.</h3>
                    <h2 className='h3-logged-out-list-title'>Basic Use</h2>
                    <ul className='ul-logged-out'>
                        <li className='li-logged-out'>Get a food idea from the suggester or make your own</li>
                        <li className='li-logged-out'>Save the idea to your cookbook</li>
                        <li className='li-logged-out'>Create menus for specific food themes</li>
                    </ul>
                    <h3 className='h3-logged-out'>Create an account to get started!</h3>
                </div>
                </>)}
        </div>
    )
}
export default Home;
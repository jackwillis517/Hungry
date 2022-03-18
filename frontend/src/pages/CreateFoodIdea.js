import React, { useState } from 'react'
import axios from 'axios'
import './CreateFoodIdea.css';


const CreateFoodIdea = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [links, setLinks] = useState('')
    
   
    const addInfo = () => {
        const foodIdeaData = {
            title: title,
            description: description,
            links: links
        }
        axios.post("http://localhost:5000/api/foodIdea", foodIdeaData)
            .then((response) => {
                console.log(response.status)
            })
            .catch((response) => {
                console.log(response)
            })
       
    }

    return (
        <div className='createfoodidea-container'>
            <div className = 'createfoodidea-header'>
                <h1 className='createfoodidea-title'>
                    <span className='font-weight-bold'>Hungry</span>
                </h1>
                <h2 className='createfoodidea-subtitle'>Create Food Idea</h2>
            </div>
            <div className='createfoodidea-infoinput'>
                <form className='createfoodidea-textform' action="http://localhost:5000/api/foodIdea/image" method="POST" encType='multipart/form-data' onSubmit={addInfo()}>
                    <label className='titlelabel'>Title</label>
                    <input value = {title} onChange={(e) => setTitle(e.target.value)} type='text' />
                    <label>Description</label>
                    <textarea value = {description} onChange = {(e) => setDescription(e.target.value)} type='text' />
                    <label>Recipe Links</label>
                    <textarea value = {links} onChange = {(e) => setLinks(e.target.value)} type='text' />
                    <label>Image</label>
                    <input className="imageinput"type="file" name="image"/>
                    <button className='createfoodidea-button'>Save</button>
                </form>
            </div>
        </div>
    )
}
  

export default CreateFoodIdea;
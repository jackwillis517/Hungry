import React, { useState } from 'react';

//Imports axios package for backend
import axios from 'axios';

//CSS for this specific components
import '../stylesheets/CreateFoodIdea.css';

const CreateFoodIdea = () => {
    //useState hook used to gather state info
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [links, setLinks] = useState('')
    const [cloudinary_url, setCloudinary_URL] = useState('')
    const [image, setImage] = useState('')
    const [previewsource, setPreviewSource] = useState('')
    
    const imageInputChange = (e) => {
        const file = e.target.files[0]
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const submitImage = (e) => {
        e.preventDefault()
        if(!previewsource) return
        uploadImage(previewsource)
    }

    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage)
        const imgData = {
            data: base64EncodedImage
        }
        await axios.post("http://localhost:5000/api/foodIdea/image", imgData)
        .then((response) => {
            setCloudinary_URL(response.data.cloudinary_url)
            console.log(cloudinary_url)
        })
        .catch((response) => {
            console.log(response)
        })  
    }

    //Function used to add food idea information to the backend
    const addInfo = () => {
        const foodIdeaData = {
            title: title,
            description: description,
            links: links,
            cloudinary_url: cloudinary_url
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
        <div>
            {/* Create Food Idea component used so the user can create a food idea */}
            {/* Doesn't use reactstrap, ran into some hiccups on the backend */}
            <div className='createfoodidea-container'>
                <div className='createfoodidea-infoinput'>
                    <form className='createfoodidea-textform' onSubmit={submitImage}>
                        <label>Image</label>
                        <input className="imageinput" type="file" name="image"
                        onChange={imageInputChange} value={image}/>
                        {previewsource && (
                        <img src={previewsource} alt="chosen" style = {{height: '200px'}}/>
                        )}
                        <button className='createfoodidea-button' type="submit">Save Image</button>
                    </form>
                    <form className='createfoodidea-textform' onSubmit={addInfo}>
                        <label className='titlelabel'>Title</label>
                        <input value = {title} onChange={(e) => setTitle(e.target.value)} type='text' />
                        <label>Description</label>
                        <textarea value = {description} onChange = {(e) => setDescription(e.target.value)} type='text' />
                        <label>Recipe Links</label>
                        <textarea value = {links} onChange = {(e) => setLinks(e.target.value)} type='text' />
                        <button className='createfoodidea-button' type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
  

export default CreateFoodIdea;
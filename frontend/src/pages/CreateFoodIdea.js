import React, { useState } from 'react'
import axios from 'axios'
import './CreateFoodIdea.css';

const CreateFoodIdea = () => {
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
        <div className='createfoodidea-container'>
            <div className = 'createfoodidea-header'>
                <h1 className='createfoodidea-title'>
                    <span className='font-weight-bold'>Hungry</span>
                </h1>
                <h2 className='createfoodidea-subtitle'>Create Food Idea</h2>
            </div>
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
                    <button className='createfoodidea-button' type="submit">Submit Idea</button>
                </form>
            </div>
        </div>
    )
}
  

export default CreateFoodIdea;
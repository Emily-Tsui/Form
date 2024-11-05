import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { useState } from 'react'
import { supabase } from '../client'


const EditPost = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, crewName: "", color: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();
        
        await supabase
            .from('Posts')
            .update({ crewName: post.crewName, color: post.color})
            .eq('id', id);

        window.location = "/";
            }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        window.location = "http://localhost:3000/";
    }

    return (
        <div>
            <form>
                <label for="crewName">Update Name</label> <br />
                <input type="text" id="title" name="crewName" value={post.crewName} onChange={handleChange} /><br />
                <br/>

                <label>Update a color</label><br />
                <input type="radio" id="red" name="color" value="Red" onChange={handleChange} />
                <label htmlFor="red">Red</label><br />

                <input type="radio" id="blue" name="color" value="Blue" onChange={handleChange} />
                <label htmlFor="blue">Blue</label><br />

                <input type="radio" id="green" name="color" value="Green" onChange={handleChange} />
                <label htmlFor="green">Green</label><br />
                <br/>

                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost
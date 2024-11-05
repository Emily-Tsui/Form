import React from 'react';
import './CreatePost.css'
import { useState } from 'react'
import { supabase } from '../client'

const CreatePost = () => {

    const [post, setPost] = useState({crewName: "", color: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .insert({crewName: post.crewName, color: post.color})
          .select();
      
        window.location = "/";
      }


    return (
        <div>
            <form>
                <label for="crewName">Name</label> <br />
                <input type="text" id="title" name="crewName" onChange={handleChange} /><br />
                <br/>

                <label>Select a color</label><br />
                <input type="radio" id="red" name="color" value="Red" onChange={handleChange} />
                <label htmlFor="red">Red</label><br />

                <input type="radio" id="blue" name="color" value="Blue" onChange={handleChange} />
                <label htmlFor="blue">Blue</label><br />

                <input type="radio" id="green" name="color" value="Green" onChange={handleChange} />
                <label htmlFor="green">Green</label><br />
                <br/>


                <input type="submit" value="Submit" onClick={createPost}/>
            </form>
        </div>
    )
}

export default CreatePost
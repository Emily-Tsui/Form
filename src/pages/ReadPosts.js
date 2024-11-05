import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
    }, [props]);

    // READ all post from table
    const fetchPosts = async () => {
        const {data} = await supabase
        .from('Posts')
        .select('*');
    
        // set state of posts
        setPosts(data)
    }
    fetchPosts();
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} crewName={post.crewName} color={post.color}/>
                ) : <h2>{'No Crewmembers Yet'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;
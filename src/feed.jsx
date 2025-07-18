import React, { useEffect, useState } from 'react';
import axios from "axios";

function Feed() {
    const [storys, setStorys] = useState([]);
    const [post, setPost] = useState([]);

    useEffect(() => {
        // Fetch posts
        axios.get("http://localhost:3001/posts")
            .then(res => setPost(res.data))
            .catch(err => console.log("Error fetching posts:", err));

        // Fetch stories
        axios.get("http://localhost:3001/posts")
            .then(res => setStorys(res.data))
            .catch(err => console.log("Error fetching stories:", err));
    }, []);

    return (
        <>
            <div className='feed'>
                <div >
                    {/* Stories */}

                    <div className="feed-story">
                        {storys.map(story => (
                            <div key={story.id} className="story-card">
                                <img src={story.profilePicture} alt="" className="story-img" />
                                <p className="story-username">{story.username}</p>


                            </div>
                        ))}
                    </div>
                </div>

                <hr />


                {/* Posts */}


                <div className="d-flex flex-column align-items-center ">
                    {post.map(post => (
                        <div key={post.id} className="card p-2 my-2">
                            <div className='my-2 mx-1'>
                                <img src={post.profilePicture} alt="" className='post-img' />
                                <b className='p-2'>{post.username}</b>
                            </div>

                            <div className="post-header">
                                <img src={post.profilePicture} alt="" className="post" />
                            </div>


                            <div className="post-actions my-2">
                                <p><i className="bi bi-heart"></i> {post.likes}</p>
                                <p><i className="bi bi-chat"></i> {post.comments.length}</p>
                                <p><i className="bi bi-send"></i></p>
                            </div>
                            <b> <p>{post.comments}</p></b>
                            <p>{post.caption}</p>
                            <p className="post-time">{new Date(post.timestamp).toLocaleString()}</p>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Feed;

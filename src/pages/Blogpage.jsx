import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const text = { color: '#000000', listStyle: 'none', textAlign: 'left' };

const Blogpage = () => {
    const [posts, setPosts] = useState([]);
    console.log(useLocation());

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_STR}`)
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);
    return (
        <div className='main'>
            <h1>Блог</h1>
            {posts.map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li style={text}>{post.title}</li>
                </Link>
            ))}
        </div>
    );
};

export { Blogpage };

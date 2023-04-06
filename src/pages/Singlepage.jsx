import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// const a404 = {
//     color: 'blue',
//     textDecoration: 'underline',
// };

const btn = {
    padding: '10px 0',
    color: '#ffffff',
    background: 'blue',
    minWidth: '120px',
    border: 'none',
    marginRight: '10px',
};

const Singlepage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', { replace: true });

    // console.log('--------->', process.env.REACT_APP_API_STR);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_STR}${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id]);

    return (
        <div className='main'>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <button style={btn} onClick={goBack}>
                        Назад
                    </button>
                    <button style={btn} onClick={goHome}>
                        На главную
                    </button>

                    {/* <Link style={a404} to='/'>Назад</Link> */}
                </>
            )}
        </div>
    );
};

export { Singlepage };

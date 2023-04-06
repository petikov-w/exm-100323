import { Outlet, Link } from 'react-router-dom';

const link = {
    color: '#000000',
    textAlign: 'left',
};

const Aboutpage = () => {
    return (
        <div className='main'>
            <h1>О Нас</h1>
            <p>Это страница "О Нас"</p>
            <ul style={link}>
                <li>
                    <Link style={link} to='contacts'>
                        Наши контакты
                    </Link>
                </li>
                <li>
                    <Link style={link} to='team'>
                        Наша команда
                    </Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export { Aboutpage };

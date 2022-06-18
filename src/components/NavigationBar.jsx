import React, {useEffect, useState} from 'react';
import {NavigationBarItem} from "./index";
import {useNavigate} from "react-router-dom";

const NavigationBar = ({user, setUser}) => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    const onLoginClick = () => {
        navigate('/auth');
    }

    const onLogoutClick = () => {
        setUser({
            isAuth: false,
            login: null,
        });
        localStorage.removeItem('user');
    }

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useEffect(() => {
        document.getElementsByTagName('html')[0].setAttribute('theme', theme);
    }, [theme])

    return (
        <nav className="navbar navbar-expand-lg bg-white py-3 border-bottom">
            <div className="container-xxl h-100 position-relative">
                <button className="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className={'position-absolute end-0 me-3 top-0'}>
                    <div className="btn-group me-3" role="group">
                        <button className={`btn btn-secondary ${theme === 'light' ? 'active' : ''}`}
                                onClick={switchTheme}
                        >
                            <i className="bi bi-brightness-high-fill"></i>
                        </button>
                        <button className={`btn btn-secondary ${theme === 'dark' ? 'active' : ''}`}
                                onClick={switchTheme}
                        >
                            <i className="bi bi-moon-fill"></i>
                        </button>
                    </div>
                    <button className={'btn btn-outline-primary'}
                            onClick={user.isAuth ? onLogoutClick : onLoginClick}
                    >
                        {user.isAuth ? 'Выйти' : 'Войти'}
                    </button>
                </div>
                <div className="collapse navbar-collapse" id={'navbarSupportedContent'}>
                    <ul className="navbar-nav">
                        <NavigationBarItem to={'/'}>Каталог</NavigationBarItem>
                        <NavigationBarItem to={'/addProduct'}>Добавить товар</NavigationBarItem>
                        <NavigationBarItem to={'/reports'}>Скачать отчёт</NavigationBarItem>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavigationBar;
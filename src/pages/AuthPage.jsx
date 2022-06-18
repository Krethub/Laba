import React, {createRef} from 'react';
import {useNavigate} from "react-router-dom";

const AuthPage = ({setUser}) => {
    const navigate = useNavigate();
    const inputRef = createRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        alert('Успешно!');

        const userData = {
            isAuth: true,
            login: inputRef.current.value,
        }
        localStorage.setItem('user', JSON.stringify(userData))
        setUser(userData);
        navigate('/');
    }

    return (
        <>
            <main className={'container-xxl pt-5 pb-5 d-flex flex-column justify-content-center align-items-center'}>
                <h1 className={'fs-1 fw-semibold mb-4'}>Авторизация</h1>
                <div className={'authCard card p-4'}>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="login" className="form-label">Имя пользователя</label>
                            <input ref={inputRef} type="text" className="form-control" id="login" required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Пароль</label>
                            <input type="password" className="form-control" id="password" required/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Войти</button>
                    </form>
                </div>
            </main>
        </>
    );
};

export default AuthPage;
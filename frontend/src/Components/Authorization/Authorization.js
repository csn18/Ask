import React, {useState} from "react";
import './Authorization.css'
import {getToken} from "../Tokens/Token";

export const Authorization = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const userInputRef = React.createRef()
    const passwordInputRef = React.createRef()

    const updateStateUsername = () => {
        setUsername(userInputRef.current.value)
    }

    const updateStatePassword = () => {
        setPassword(passwordInputRef.current.value)
    }

    const authorizationUser = () => {
        const bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);
        getToken(bodyFormData)
    }

    return (
        <div className='auth-form'>
            <div className='form'>
                <h2>Авторизация</h2>
                <input type="text" ref={userInputRef} onChange={updateStateUsername}/>
                <input type="password" ref={passwordInputRef} onChange={updateStatePassword}/>
                <button onClick={authorizationUser}>Войти</button>
            </div>
        </div>
    )
}
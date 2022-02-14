import axios from "axios";
import React, {useState} from "react";

export const Registration = () => {
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

    const getToken = () => {
        const bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);
        const authorizationApi = 'http://127.0.0.1:8000/auth/token/login/'

        axios.post(authorizationApi, bodyFormData, {
            headers: {'Content-Type': 'application/json'},
        })
            .then((response) => {
                localStorage.setItem('auth_token', response.data.auth_token)
            })
    }

    const registrationUser = () => {
        const bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);

        const registerApi = 'http://127.0.0.1:8000/auth/users/'

        axios.post(registerApi, bodyFormData, {
            headers: {'Content-Type': 'application/json'},
        })
            .then((response) => {
                getToken()
            })
    }
    return(
        <div>
            <input type="text" ref={userInputRef} onChange={updateStateUsername}/>
            <input type="password" ref={passwordInputRef} onChange={updateStatePassword}/>
            <button onClick={registrationUser}>Регистрация</button>
        </div>
    )
}
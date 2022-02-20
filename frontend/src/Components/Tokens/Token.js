import axios from "axios";

export const getToken = (bodyFormData) => {
    const authorizationApi = 'http://127.0.0.1:8000/auth/token/login/'

    axios.post(authorizationApi, bodyFormData, {
        headers: {'Content-Type': 'application/json'},
    }).then((response) => {
        localStorage.setItem('auth_token', response.data.auth_token)
        return window.location.reload()

    })
}
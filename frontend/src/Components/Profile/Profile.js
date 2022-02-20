import {useEffect, useState} from "react";
import './Profile.css'
import axios from "axios";

export const Profile = () => {
    const [userInfo, setUserInfo] = useState({})
    const userAuthId = localStorage.getItem('auth_token')

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api-user/v1/get-user/', {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                'auth-token': userAuthId
            }
        }).then(response => setUserInfo(response.data))
    }, []);


    return (
        <div>
            <div className="profile-header">
                <div className="profile-image">
                    <img src={userInfo.photo} alt=""/>
                </div>
                <div className="profile-info">
                    <h1 className="username">@{userInfo.username}</h1>
                    <h3 className="name">{userInfo.first_name} {userInfo.last_name}</h3>
                </div>
            </div>
        </div>
    )
}

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export const UserProfile = (props) => {
    const {id} = useParams();
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/users-list/${id}`, {
            headers: {'Content-Type': 'application/json'},
        })
            .then((response) => setUserInfo(response.data))
    }, [])


    return (
        <div className="profile">
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
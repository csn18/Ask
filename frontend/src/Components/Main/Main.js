import axios from "axios";
import {useEffect, useState} from "react";
import {User} from "../Users/Users";

export const Main = (props) => {

    const [users, setUsers] = useState({})
    const url = 'http://127.0.0.1:8000/api/v1/users-list/'

    useEffect(() => {
        axios.get(url, {
            headers: {'Content-Type': 'application/json'},
        })
            .then((response) => setUsers(response.data))
    }, [])


    return (
        <div>
            {
                users ?
                    Object.values(users).map(userInfo => <User key={userInfo.id} user={userInfo}/>)
                    : console.log('error')
            }
        </div>
    )
}
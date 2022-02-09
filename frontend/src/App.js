import './App.css';
import React, {useEffect, useState} from "react";
import {Users} from "./Components/Users/Users";

function App() {
    const [userList, setUsers] = useState();


    function fetchUsers() {
        return Promise.all([
            fetch('http://127.0.0.1:8000/accounts/users/?format=json')
                .then(response => response.json())
                .then(data => setUsers(data))
        ])
    }


    return (
        <div className="App">
            {
                userList?.map((user) => {
                    <Users key={user.id} data={user}/>
                })
            }
        </div>
    );
}

export default App;

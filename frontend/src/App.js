import './App.css';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Authorization} from "./Components/Authorization/Authorization";
import {Registration} from "./Components/Registration/Registration";
import {Route, Routes} from "react-router-dom";
import {Main} from "./Components/Main/Main";

function App() {
    return (
        <div>
            <Navbar/>
            <div className='container'>
                {
                    localStorage.getItem('auth_token')
                        ?
                        <Routes>
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/' element={<Main/>}/>
                        </Routes>
                        :
                        <Routes>
                            <Route path='/auth' element={<Authorization/>}/>
                            <Route path='/registration' element={<Registration/>}/>
                        </Routes>
                }
            </div>
        </div>

    )
        ;
}

export default App;

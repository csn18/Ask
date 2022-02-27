import {NavLink} from 'react-router-dom'
import React, {useState} from "react";
import './Navbar.css'

function Navbar() {


    return (
        <div className='nav-bar'>

            {
                localStorage.getItem('auth_token')
                    ?
                    <div>
                        <NavLink to='/profile'>Профиль</NavLink>
                        <NavLink to='/logout'>Выйти</NavLink>
                        <NavLink to='/'>Главная</NavLink>
                    </div>
                    :
                    <div>
                        <NavLink to='/auth'>Авторизация</NavLink>
                        <NavLink to='/registration'>Регистрация</NavLink>
                    </div>

            }

        </div>

    )
}

export default Navbar

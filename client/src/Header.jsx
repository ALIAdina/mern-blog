import React, { useEffect, useState, useContext } from 'react'


import { Link } from 'react-router-dom'
import { UserContext } from "./UserContext";
import { API_URL } from './config';

function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch(`${API_URL}/profile`, {
            credentials: 'include',

        }).then(response => response.json()).then(data => {
            setUserInfo(data);
        })


    }, []);
    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',

        });
        setUserInfo(null);

    }
    const username = userInfo?.username;

    return (

        <header>
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                {username && (
                    <><Link to="/Create">Create new post</Link>
                        <a onClick={logout}>logout</a>

                    </>)
                }
                {!username &&
                    <>
                        <Link to="/Login" className="login">login</Link>
                        <Link to="Registre" className="registre">Registre</Link>
                    </>}

            </nav>
        </header>

    )
}

export default Header

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [username, setUsername] = useState(null);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',

        }).then(response => response.json())
            .then(userInfo => { setUsername(userInfo.username) }
            )

    }, []);
    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',

        });
        setUsername(null);
    }

    return (

        <header>
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                {username && (
                    <><Link to="/create">Create new post</Link>
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

import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (

        <header>
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                <Link to="/Login" className="login">login</Link>
                <Link to="Registre" className="registre">Registre</Link>
            </nav>
        </header>

    )
}

export default Header

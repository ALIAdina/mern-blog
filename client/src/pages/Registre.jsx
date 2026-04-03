import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { API_URL } from '../config';
function Registre() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function register(ev) {
        ev.preventDefault();
        try {
            const reponse = await fetch(`${API_URL}/register`, {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            console.log("reponse", reponse);
            const data = await reponse.json();
            console.log("data test  ", data);
            if (reponse.ok)
            {
                console.log("test set redi")
                setRedirect(true);
            }

        } catch (e) { alert('Registration failed'); }

    }

    if (redirect) {
        return <Navigate to="/login" />
    }
    return (
        <form className='register' onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder='password' value={password}
                onChange={e => setPassword(e.target.value)} />
            <button>Register</button>


        </form>
    )
}

export default Registre

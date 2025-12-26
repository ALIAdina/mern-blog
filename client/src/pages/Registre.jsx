import React, { useState } from 'react'


function Registre() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault();
        try {
            const reponse = await fetch('http://localhost:4000/register', {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            console.log("reponse", reponse);
            const data = await reponse.json();
            console.log("data  ", data)

        } catch (e) { alert('Registration failed'); }

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

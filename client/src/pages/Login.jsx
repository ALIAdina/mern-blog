import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext';
import { API_URL } from '../config';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);
    async function login(e) {
        e.preventDefault();

        //try 
        {
            const reponse = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include',

            });
            console.log("req avant envoyer", reponse);
            //const data = await reponse.json();
            //console.log("data  token  ", data);
            if (reponse.ok) {
                console.log("hello login");
                reponse.json().then(data => {
                    setUserInfo(data);
                    setRedirect(true);
                })


            } else {
                alert('worng credentials')
            }
        }
        //  catch (e) { alert('login failed'); }

    }

    if (redirect) {
        return <Navigate to="/" />
    }



    return (
        <form className='login' onSubmit={login}>
            <h1>login</h1>
            <input type="text" placeholder='username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
            < input type="password" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <button>loginn</button>

        </form >
    )
}

export default Login

import React from 'react'
import UserContext from '../context/UserContext'
import { useState, useContext } from 'react'
function Login() {
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext)
    return (
        <div>
            <h2>Login</h2>
            <input type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />
            <input type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
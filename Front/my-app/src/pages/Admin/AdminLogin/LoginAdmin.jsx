// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginAdmin = ({ setAuthenticated }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         // Here you can implement your logic to check the username and password
//         // For example, you can compare them with predefined values or make an API call
        
//         // For demonstration, let's consider hardcoded values
//         const adminUsername = 'admin';
//         const adminPassword = 'admin';

//         if (username === adminUsername && password === adminPassword) {
//             // If username and password match, redirect to admin dashboard
//             setAuthenticated(true);
//             navigate('/admin');
//         } else {
//             // If username or password is incorrect, you can show an error message or handle it accordingly
//             alert('Invalid username or password');
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     );
// };

// export default LoginAdmin;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdLo.scss'

const LoginAdmin = ({ setAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Here you can implement your logic to check the username and password
        // For example, you can compare them with predefined values or make an API call
        
        // For demonstration, let's consider hardcoded values
        const adminUsername = 'admin';
        const adminPassword = 'admin';

        if (username === adminUsername && password === adminPassword) {
            // If username and password match, set authentication state and redirect to admin dashboard
            setAuthenticated(true);
            localStorage.setItem('authenticated', 'true'); // Store authentication state in local storage
            navigate('/admin');
        } else {
            // If username or password is incorrect, you can show an error message or handle it accordingly
            alert('Invalid username or password');
        }
    };

    return (
        <div className='logg'>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginAdmin;

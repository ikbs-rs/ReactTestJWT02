import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const history = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .post('http://localhost:8380/users/register', formData)
            .then(response => {
                if (response.data.success) {
                    history.push('/login');
                } else {
                    setErrorMessage(response.data.message);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="App-header">
            <input type="text" name="firstname" onChange={handleChange} placeholder="Ime" /><b />  
            <input type="text" name="lastname" onChange={handleChange} placeholder="Prezime" /><b />
            <input type="text" name="username" onChange={handleChange} placeholder="Email" /><b />
            <input type="password" name="password" onChange={handleChange} placeholder="Password" />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterPage;
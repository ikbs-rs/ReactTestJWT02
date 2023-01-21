import React, { useState, useEffect } from 'react';

const Profile = (props) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8380/users/1`)
        .then(response => response.json())
        .then(data => {
            setUserData(data);
        });
    }, []);

    return (
        <div>
            <h1>Dobro došli, {userData.firstName} {userData.lastName}</h1>
        </div>
    );
};

export default Profile;

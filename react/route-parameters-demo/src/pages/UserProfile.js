import React from "react";
import { useParams } from 'react-router-dom';

function UserProfile(){
    const { userId } = useParams();

    return (

        <div>
            <div>
                <h2>User Profile</h2>
                <p>User Id: {userId}</p>
            </div>
        </div>

    );
}

export default UserProfile;
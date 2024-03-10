import React from "react";
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    const redirectToDashboard = () => {
        navigate("/dashboard");
    };

    return (
        <div>
            <h2>Welcome to Home Page!</h2>
            <button onClick={redirectToDashboard}>Go to Dashboard</button>
        </div>
    );
}

export default Home;
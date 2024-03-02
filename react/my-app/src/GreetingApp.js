import React, { useState } from 'react';
import Greeting from './Greeting';

function GreetingApp(){
    const [username, setUserName] = useState('John');

    
return (
    <div>
        <br/>
        <br/>
        <Greeting username={username} />
        <button onClick={() => setUserName('Jane')}>Change Name</button>
    </div>
);
}

export default GreetingApp;

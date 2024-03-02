import React, { memo } from 'react';


const Greeting = memo(({username}) => {
    console.log('Rendering Greetings!');
    return <div>Hello, {username}! </div> 
});

export default Greeting;
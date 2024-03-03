import React from 'react';
import CounterHook from './CounterHook';

function CounterHookApp(){
    
    const mystyle = {
        color: "black",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        border: '2px solid black'
      };
   
    return (
        <div style={mystyle}>
            <CounterHook />
        </div>
    )
}

export default CounterHookApp;
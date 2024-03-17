import React, { useState, useEffect } from 'react';
import './App.css';

function App(){
  const [data, setData] = useState(null);

  async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonData = await response.json();
    setData(jsonData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
        <h1>API Demo</h1>
        {data? (
          <p>API Response: {JSON.stringify(data)}</p>
        ) : (
          <p>Loading Data...</p>
        )}
    </div>
  );
}

export default App;
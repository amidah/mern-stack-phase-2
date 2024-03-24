import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './components/indexPage';
import AdminPage from './components/adminPage';
import CustomerPage from './components/customerPage';

function App{
  return (
    <div className="App">
      <h2>Online Banking Application</h2>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/customerHome" element={<CustomerPage />}></Route>
        <Route path="/adminHome" element={<AdminPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;

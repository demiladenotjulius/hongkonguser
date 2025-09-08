import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from "./Components/Dasboard/Dasboard"
import Account from "./Components/Dasboard/Account";
import Transfers from './Components/Dasboard/Transfers';
import Profile from './Components/Dasboard/Profile';
import Transactions from './Components/Dasboard/Transactions';
import CardsPage from './Components/Dasboard/Cards';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/cards" element={<CardsPage />} />
      </Routes>
    </div>
  );
}

export default App;
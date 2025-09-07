import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dasboard/Dasboard';
import Account from "./Components/Dasboard/Account";
import Transfers  from './Components/Dasboard/Transfers';
import  Profile  from './Components/Dasboard/Profile';
import  Transactions  from './Components/Dasboard/Transactions';
import CardsPage from './Components/Dasboard/Cards';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Transfers" element={<Transfers />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Transactions" element={<Transactions />} />
           <Route path="/Cards" element={<CardsPage />} />
           
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
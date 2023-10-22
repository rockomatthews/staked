import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './App.css';

function App() {
  // State for user data and active bets
  const [userData, setUserData] = useState({});
  const [activeBets, setActiveBets] = useState([]);

  return (
    <div className="App">
      <Header />
      <Dashboard activeBets={activeBets} />
      <Footer />
    </div>
  );
}

export default App;

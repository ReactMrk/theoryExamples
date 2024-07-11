import React from 'react';
import ClientManagement from "./client/ClientManagement";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Client Management System</h1>
      <ClientManagement />
    </div>
  )
};

export default App

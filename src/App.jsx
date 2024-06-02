import React from 'react';
import PasswordGenerator from './PasswordGenerator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PasswordGenerator.css'; 

function App() {
  return (
    <div className="App">
      <PasswordGenerator />
      <ToastContainer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './PasswordGenerator.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~';
    let newPassword = '';
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      toast.success('Password copied to clipboard!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="password-generator">
      <div className='container'>
      <h1>Password Generator</h1>
      <div className="password-display">
      <button onClick={generatePassword}>Generate Password</button>
      
        <input type="text" value={password} readOnly />
        </div>
        <div className="password-display2">
        <button onClick={copyToClipboard}>Copy to Clipboard</button></div>
     </div>
      <ToastContainer />
    </div>
  );
};

export default PasswordGenerator;

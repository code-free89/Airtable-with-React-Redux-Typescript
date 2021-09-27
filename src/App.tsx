import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import LoginPage from './pages/login';
import MainPage from './pages/main';
import { selectLoginStatus } from './store/auth/selectors';

function App() {
  const logInStatus = useSelector(selectLoginStatus);
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {!logInStatus ? <LoginPage /> : <MainPage />}      
    </div>
  );
}

export default App;

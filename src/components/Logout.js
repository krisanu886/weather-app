import React from 'react';
import './style.css';
import WeatherApp from './WeatherApp';

const Logout = () => {
  return (
    <>
    <div className='logoutPage'>
    
    <WeatherApp/>
    <button className='logoutBtn'>Logout</button>
    </div>
    
    </>
  );
}

export default Logout;
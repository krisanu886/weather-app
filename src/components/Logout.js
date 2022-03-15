import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import './style.css';
import WeatherApp from './WeatherApp';

const Logout = () => {
    const dispatch = useDispatch();
    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(login());
    }
  return (
    <>
    <div className='logoutPage'>
    
    <WeatherApp/>
    <button className='logoutBtn' onClick={(e)=>handleLogout(e)}>Logout</button>
    </div>
    
    </>
  );
}

export default Logout;
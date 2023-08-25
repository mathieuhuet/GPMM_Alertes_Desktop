import './user.css'
import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar';
import GPMM_LOGO from '../../Assets/GPMM_logo.webp';

const initialState = {
  firstName: '',
  lastName: '',
};

/*
User Page.

It only display the name of the user.

Also the page where you would logout.
*/


const User = () => {
  const [cookies, setCookie] = useCookies(['accessToken']);
  //Profile section
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem('user')));
  }, [cookies.userToken])

  const disconnect = () => {
    setCookie('accessToken', '');
  }

  return (
    <div className='App'>
      <div>
        <Navbar/>
      </div>
      <div className='UserPage'>
        <img src={GPMM_LOGO} />
        <div>
          <h1>
            {state.firstName}
          </h1>
          <h1>
            {state.lastName}
          </h1>
        </div>
        <button
          className='DisconnectButton'
          onClick={disconnect}
        >
          Se Déconnecter
        </button>
      </div>
    </div>
  );
};

export default User;

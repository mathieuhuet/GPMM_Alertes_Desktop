import './user.css'
import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';

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
  const [cookies, setCookie] = useCookies(['userToken']);


  //Profile section
  const [state, setState] = useState(initialState);

  const firstName = state.firstName || '';
  const lastName = state.lastName || '';


  return (
    <div className='AppContainer'>

    </div>
  );
};

export default User;

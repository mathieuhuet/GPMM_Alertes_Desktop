import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Auth
import { useCookies } from 'react-cookie';
import { getUserInfo } from './Services/userServices/getUserInfo';
// Auth routes
import SignedInRoute from './Routes/signedInRoute';
import SignedOutRoute from './Routes/signedOutRoute';


function App() {
  const [cookies, setCookie] = useCookies(['accessToken']);
  useEffect(() => {
    if (cookies.accessToken) {
      getUserInfo(cookies.accessToken).then((result) => {
        localStorage.setItem('user', JSON.stringify(result.data));
      }).catch((err) => {
        setCookie('accessToken', '');
        console.log(err, 'APP 2');
      })
    }
  }, [cookies.accessToken, setCookie])


  return (
    <div className="App">
      <Router>
      {cookies.accessToken ?           
        <SignedInRoute/> :
        <SignedOutRoute/>
      }   
      </Router>
    </div>
  );
}

export default App;

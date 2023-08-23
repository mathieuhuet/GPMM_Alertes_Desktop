import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
// Auth
import { useCookies } from 'react-cookie';
import { getUserInfo } from './Services/userServices/getUserInfo.ts';
// Auth routes
import SignedInRoute from './Routes/signedInRoute';
import SignedOutRoute from './Routes/signedOutRoute';




function App() {
  const [cookies, setCookie] = useCookies(['accessToken', 'user']);
  useEffect(() => {
    if (cookies.accessToken) {
      getUserInfo(cookies.accessToken).then((result) => {
        setCookie('user', result.data);
      }).catch((err) => {
        setCookie('accessToken', '');
        console.log(err, 'APP 2');
      })
    }
  }, [cookies.accessToken])


  return (
    <div className="App">
      <Router>
        <Navbar />
        {cookies.accessToken ?           
          <SignedInRoute/> :
          <SignedOutRoute/>
        }
      </Router>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

const testUsers = {
  admin: { password: 'password', name: 'Administrator', role: 'admin', capabilities: ['create', 'read', 'update', 'delete'] },
  editor: { password: 'password', name: 'Editor', role: 'editor', capabilities: ['read', 'update'] },
  writer: { password: 'password', name: 'Writer', role: 'writer', capabilities: ['create'] },
};

export const AuthContext = React.createContext();

function AuthProvider(props) {

  let login = (username, password) => {
    console.log('TESTUSERS', testUsers[username]);
    if (testUsers[username]) {
      // Create a "good" token, like you'd get from a server
      // const token = jwt.sign(testUsers[username], process.env.REACT_APP_SECRET);
      const token = 'token';
      setLoginState(true, token, testUsers[username]);
      // validateToken(token);
    } else {
      console.log('Invalid User');
    }
  }

  let logout = () => {
    console.log('clicked logout');
    setLoginState(false, null, {});
  };

  let validateToken = token => {
    console.log('in validate token');
    try {
      // let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      let user = {

      };
      setLoginState(true, token, user);
    }
    catch (e) {
      setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }

  };

  let setLoginState = (loggedIn, token, user) => {
    console.log('in set login state');
    cookie.save('auth', token);
    setState({ ...state, token, loggedIn, user });
  };

  const intialState = {
    loggedIn: false,
    user: { capabilities: [] },
    login: login,
    logout: logout,
  }

  const [state, setState] = useState(intialState);

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    // validateToken(token);
  }, []);



  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
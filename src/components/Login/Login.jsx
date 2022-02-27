import React, {useState, useContext} from 'react';
import {When} from 'react-if';

import { AuthContext } from '../../context/auth';

function Login(props){
  const auth = useContext(AuthContext);
  const [credentials, setCredentials] = useState({})

  handleChange = e => {
    let creds = {
      username: e.target.name,
      password: e.target.value
    }
    setCredentials(creds);
  };

  handleSubmit = e => {
    e.preventDefault();
    auth.login(credentials.username, credentials.password);
  };

  return(
    <>
        <When condition={auth.loggedIn}>
          <button onClick={auth.logout}>Log Out</button>
        </When>

        <When condition={!auth.loggedIn}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button>Login</button>
          </form>
        </When>
      </>
  )
}

export default Login;
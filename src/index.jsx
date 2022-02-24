import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';

import App from './App.jsx';

function Main() {
    return(
      <App />
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

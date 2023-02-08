import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/custom.css';
import '../src/assets/css/fontawesome.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/css/placeholder-loading.min.css'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



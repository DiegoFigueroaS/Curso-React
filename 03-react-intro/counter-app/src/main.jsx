import React, { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp value={50}/>
  </StrictMode>
);


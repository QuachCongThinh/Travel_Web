import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterCustom from './routes';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RouterCustom />
  </BrowserRouter>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import reactToWebComponent from "react-to-webcomponent";
import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const AppComponent = reactToWebComponent(App, React, ReactDOM);

customElements.define("app-component", AppComponent);
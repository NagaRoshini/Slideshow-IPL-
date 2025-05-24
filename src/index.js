import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This will find the <div id="root"> in public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root div
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

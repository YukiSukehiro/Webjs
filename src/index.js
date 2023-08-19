import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';




const rootElement = document.getElementById('root');

// Using createRoot to create a root-level component
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the root
root.render(<App />);



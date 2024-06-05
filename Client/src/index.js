import React from 'react';
import reactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import {BrouserRouter,Routes, Route } from 'react-router-dom'

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrouserRouter>
        <Routes>
            <Route/>

            
        </Routes>
        </BrouserRouter>
    </React.StrictMode>
);
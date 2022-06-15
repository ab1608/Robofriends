/**
 * React allows us to make components that only need to concern themselves with their
 * own functionality (javascript) and styles (css)
 */



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Hello.js';
// import App from './App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));


/*
We can add properties to our components that can be used in the class.js file.
 */
root.render(
    <React.StrictMode>
        <Hello
            greeting={'Hello' + 'I\'m learning react'}
            name={'abraham'}
        />

        {/*<App/>*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

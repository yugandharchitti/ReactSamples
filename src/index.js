import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';
import Welcome from './welcome';
import Header from './components/header';


const App = () => {
    return (
        <div>
            <Header/>
        <h1>Welcome to React </h1>
        <h2>Date : {new Date().toLocaleTimeString()}</h2>
        <Welcome/>
        <Dashboard/>
        </div>
    )
}
ReactDOM.render(<App/> , document.getElementById('root'));
import React from 'react';
import Card from './card/Card';
// import Food from './components/Food';
// import Form from './components/Form';
// import Signup from './signup/Signup';
// import './App.css';
// import Login from './login/Login';

const App = () =>{
    const gridBox = {
        display : "grid",
        gridTemplateColumns : "repeat(3, 1fr)"
    }
    return (
        // <div>
        //     <Food/>
        //     <Form/>
        // </div>

        // <div className="container">
        //     <Signup/>
        // </div>

        // <Login/>

        <div style= {gridBox}>
            <Card 
                name="Riya Sinha"
                email="riyasinha689@gmail.com"
                image="https://via.placeholder.com/200"
            />
            <Card
                name="Richa kumari"
                email="richakumari3@gmail.com"
                image="https://via.placeholder.com/200"
            />

            <Card
                name="Taruna Rani"
                email="tarunarani@gmail.com"
                image="https://via.placeholder.com/200"
            />
        </div>
        
    )
}

export default App;


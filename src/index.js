import React from 'react';
import ReactDOM from 'react-dom/client';

// React Lists

function Car(props){
    return <li>It's a {props.brand}</li>
}

function Garage(){
    const cars = [
        {id:1,brand:'Ford'},
        {id:2,brand:'BMW'},
        {id:3,brand:'Audi'}
    ];
    return(
        <>
            <h1>What's in my garage?</h1>
            <ul>
                {cars.map((car)=><Car key={car.id} brand={car.brand}/>)}
            </ul>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);

import { useState } from 'react';
import './style.css';

function MainApp(){
    const [number, setNumber] = useState(1);

    return (
        <div id='container'>
            <h1>Root : {number}</h1>
            <Left1 number={number}/>
        </div>
    )
}

function Left1(props){
    const {number} = props;

    return(
        <div>
            <h1>Left1 : {number}</h1>
            <Left2 number={number}/>
        </div>
    )
}

function Left2(props){
    const {number} = props;
    return(
        <div>
            <h1>Left2 : {number}</h1>
            <Left3 number={number}/>
        </div>
    )
}

function Left3(props){
    return(
        <div>
            <h1>Left3</h1>
        </div>
    )
}

function Right1(props){
    const {onIncrease} = props;

    return(
        <div>
            <h1>Right1</h1>
            <Right2/>
        </div>
    )
}

function Right2(props){
    const {onIncrease} = props;
    return(
        <div>
            <h1>Right2 </h1>
            <Right3/>
        </div>
    )
}

function Right3(props){
    return(
        <div>
            <h1>Right3</h1>
        </div>
    )
}
export default MainApp;
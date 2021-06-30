//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {incNum, decNum} from "./actions/index";


function App() {

  const myState = useSelector((state) => state.changeNum);

  const dispatch = useDispatch(); // dispatch trigers the actions 


  return (
    <React.Fragment>
    <div className="main-div">
      

    <div className="container">

    <h1>Increment/Decrement counter</h1>
    <h4>using React and Redux</h4>
    
    <div className="quantity">
      <button className="quantity__minus" title="Decrement" onClick={ () => dispatch(decNum())}><span> - </span></button>
      <input name="quantity" type="text" className="quantity__input" value={myState}/>
      <button className="quantity__plus" title="Increment" onClick={ () => dispatch(incNum())}><span> + </span></button>
    </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

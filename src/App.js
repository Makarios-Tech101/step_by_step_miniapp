import React from 'react';
import './App.css';

const message = [
  " Learn React✨",
  " Apply for Jobs👜",
  " Invest in yourself👸",

];


export default function App() {

  const step = 1;

  function handlePrevious() {

  }

  function handleNext() {

  }

  return (
    <div className="step">
       <div className="numbers">
         <div className={`${step >= 1 ? "active": ""}`}>1</div>
         <div className={`${step >= 2 ? "active": ""}`}>2</div>
         <div className={`${step >= 3 ? "active": ""}`}>3</div>
       </div>
       <div className="sentence">
         <p>
           Step {step}: {message[step-1]}
         </p>
       </div>
       <div className='buttons'>
         <button 
           style={{backgroundColor: "#50038e", color:"#fff" }}
           onClick={handlePrevious}
        >
           Previous
        </button>
         <button 
            style={{backgroundColor:"#50038e", color: "#fff" }}
            onClick={handleNext}
        >
           Next
        </button>
       </div>
    </div>
  );
}
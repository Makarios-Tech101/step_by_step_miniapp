import React, { useState } from 'react';
import './App.css';

const message = [
  " Learn React✨",
  " Apply for Jobs👜",
  " Invest in yourself👸",

];


export default function App(){
  return <div>
    <Steps />
  </div>
}

function Steps() {

  // const step = 2;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // if (step > 1 ) setStep(step - 1);
    if (step > 1) setStep((s) => s-1);
  }

  function handleNext() {
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> X </button> */}
      <button className="close" onClick={() => setIsOpen((is) => (!is))}> X </button>
     {isOpen && (
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
         <Button
           bgColor="#50038e"
           textColor="#fff"
           onClick= {handlePrevious}
         >
          <span>👈</span> Previous
        </Button>
           
        
        <Button 
          bgColor="#50038e"
          textColor= "#fff"
          onClick={handleNext}
        >
          Next <span>👉</span>
        </Button>
       </div>
    </div>
    )}
   </>  
  );
}

function Button({bgColor,textColor, onClick, children}) {
  return (
     <>
     <button
       style={{backgroundColor:bgColor, color: textColor}}
       onClick={onClick}
     >
      {children}
     </button>
     </>
  );
} 
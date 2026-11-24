import React from 'react'
function calculate(a,b,callback){
    const result=callback(a,b);
    return result;
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;     
}
 
function multiply(a,b){
    return a*b;
}

const Callback = () => {
   const addition = calculate(5, 3, add);
   const subtraction = calculate(5, 3, subtract);
   const multiplication = calculate(5, 3, multiply);

  return (
    <div>
        <h1>Callback Example</h1>
        <p>Addition: {addition}</p>
        <p>Subtraction: {subtraction}</p>
        <p>Multiplication: {multiplication}</p>
    </div>
  )
}

export default Callback
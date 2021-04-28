import {useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('')
  const [operation, setOperation] = useState(null)
  const [newNumber , SetNewNumber] = useState(true)
  const [current, setCurrent] = useState('')

  
  function clear() {
    setValue('')
    setCurrent('')
    setOperation(null)
  }

  function virgula(v) {
    if(value.charAt(0) == ',' || value == ''){
      return 
    }
    setValue(value + v)
  }

  function addNumber(n) {
    if(newNumber){
     setValue(value + n)
     SetNewNumber(false)
    }else {
      setValue(value + n)
    }
  }
  
  function operator(op) {
    setCurrent(value)
    setValue('')
    setOperation(op)
  }

  useEffect(() => {console.log(current, value)}, [current, value])

  function calculate() {
    let n1 = parseFloat(current)
    let n2 = parseFloat(value)
    let result = ''
    if(operation !== null){
   
      if(operation == '+'){
        result = n1 + n2
      }
      if(operation == '/'){
        result = n1 / n2
      }
      if(operation == '*'){
        result = n1  * n2
      }
      if(operation == '-'){
        result = n1 - n2
      }
      if(operation == '%'){
        result = n1 * (( n2 / 100))
      }
    }
    setValue(result)
    setOperation(null)
    setCurrent(0)
  }

  return (
    <div className="container">
      <div className = 'content'>

        <div className ='content-display'>
           {value}
        </div>
       <div className ='content-button'>
          <button className ='button'value ='C' type ='button' onClick ={() => clear() }>C</button>
          <button className ='button'value ='DEL' type ='button' onClick ={() => {}}>DEL</button>
          <button className ='button'value ='%' type ='button' onClick ={(event) => operator(event.target.value)}>%</button>
          <button className ='button'value ='/' type ='button' onClick ={(event) => operator(event.target.value)}>/</button>
          <button className ='button'value ='9' type ='button' onClick ={event => addNumber(event.target.value)}>9</button>
          <button className ='button'value ='8' type ='button' onClick ={event => addNumber(event.target.value)}>8</button>
          <button className ='button'value ='7' type ='button' onClick ={event => addNumber(event.target.value)}>7</button>
          <button className ='button'value ='*' type ='button' onClick ={(event) => operator(event.target.value)}>*</button>
          <button className ='button'value ='4' type ='button' onClick ={event => addNumber(event.target.value)}>4</button>
          <button className ='button'value ='5' type ='button' onClick ={event => addNumber(event.target.value)}>5</button>
          <button className ='button'value ='6' type ='button' onClick ={event => addNumber(event.target.value)}>6</button>
          <button className ='button'value ='-' type ='button' onClick ={(event) => operator(event.target.value)}>-</button>
          <button className ='button'value ='1' type ='button' onClick ={event => addNumber(event.target.value)}>1</button>
          <button className ='button'value ='2' type ='button' onClick ={event => addNumber(event.target.value)}>2</button>
          <button className ='button'value ='3' type ='button' onClick ={event => addNumber(event.target.value)}>3</button>
          <button className ='button'value ='+' type ='button' onClick ={(event) => operator(event.target.value)}>+</button>
          <button className ='button'value =' ' type ='button' onClick ={(event) => operator(event.target.value)}> </button>
          <button className ='button'value ='0' type ='button' onClick ={event => addNumber(event.target.value)}>0</button>
          <button className ='button'value =',' type ='button' onClick ={event => virgula(event.target.value)}>,</button>
          <button className ='button'value ='=' type ='button' onClick ={() => calculate()}>=</button>
       </div>
      </div>
    </div>
  );
}

export default App;

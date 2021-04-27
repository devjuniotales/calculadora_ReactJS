import {useEffect, useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState("0")
  const [value, setValue] = useState('')
  const [operation, setOperation] = useState(null)
  const [current, setCurrent] = useState('')

  
  function calc() {
    setValue('')
    setDisplay('0')
    setCurrent('')
    setOperation(null)
  }

  useEffect(() => {console.log()},[display])

  function addNumber(n) {
    setValue(value + n)
  }
  
  function operator(op) {
    setCurrent(value)
    setValue(' ')
    setOperation(op)
  }

  function calculate() {
    let n = current
    n.replace(',')
    console.log(n)

    if(operation == '+'){
      console.log(value)
      let s = Number(current) + Number(value)
      setDisplay(s)
    }
    if(operation == '/'){
      let s = Number(current) / Number(value)
      setDisplay(s)
    }
    if(operation == '*'){
      let s = Number(current) * Number(value)
      setDisplay(s)
    }
    if(operation == '-'){
      let s = Number(current) - Number(value)
      setDisplay(s)
    }
    if(operation == '%'){
      let s = Number(current) * (( value / 100))
      console.log('', s)
      setDisplay(s)
    }
  }

  return (
    <div className="container">
      <div className = 'content'>

        <div className ='content-display'>
           {display === '0' ? value : display }
        </div>
       <div className ='content-button'>
          <button className ='button'value ='C' type ='button' onClick ={() => calc() }>C</button>
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
          <button className ='button'value =',' type ='button' onClick ={event => addNumber(event.target.value)}>,</button>
          <button className ='button'value ='=' type ='button' onClick ={() => calculate()}>=</button>
       </div>
      </div>
    </div>
  );
}

export default App;

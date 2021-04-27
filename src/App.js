import {useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState("0")
  const [value, setValue] = useState('')
  const [operation, setOperation] = useState(null)
  const [current, setCurrent] = useState('')

  
  function clear() {
    setValue('')
    setDisplay('0')
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
    setValue(value + n)
  }
  
  function operator(op) {
    setCurrent(value)
    setValue('')
    setOperation(op)
  }

  function calculate() {
    let n1 = parseFloat(current.replace(',', '.'))
    let n2 = parseFloat(value.replace(',' , '.'))
    let result = ''
    if(operation == null){
      return 
    }
    if(operation == '+'){
      result = n1 + n2
    }
    if(operation == '/'){
      result = n1 / n2
    }
    if(operation == '*'){
      result = n1  * n2
      setDisplay(result)
    }
    if(operation == '-'){
      result = n1 - n2
      setDisplay(result)
    }
    if(operation == '%'){
      result = n1 * (( n2 / 100))
    }
    setDisplay(result.toFixed(2))
  }

  return (
    <div className="container">
      <div className = 'content'>

        <div className ='content-display'>
           {display === '0' ? value : display }
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

import React from 'react'
import './Calculadora.css'

function Calculadora() {
  const [number, setNumber] = React.useState(0)
  const [oldNumber, setOnldNumber] = React.useState(0)
  const [operator, setOperator] = React.useState()

  function inputNumber({ target }) {
    const inputValue = target.value
    number == 0 ? setNumber(inputValue) : setNumber(number + inputValue)
  }
  function clearResult() {
    setNumber(0)
  }

  function percentage() {
    setNumber(+number / 100)
  }

  function changeSign() {
    if (number > 0) setNumber(-number)
  }

  function operatorHandler({ target }) {
    const operatorInput = target.value
    setOperator(operatorInput)
    setOnldNumber(number)
    setNumber(0)
  }

  function calculate() {
    if (operator === '/') {
      setNumber(oldNumber / number)
    }
    if (operator === '*') {
      setNumber(oldNumber * number)
    }
    if (operator === '-') {
      setNumber(oldNumber - number)
    }
    if (operator === '+') {
      setNumber(Number(oldNumber) + Number(number))
    }
  }

  return (
    <div className="container">
      <div className='wrapper'>
        <div className='result'>{number}</div>
        <button onClick={clearResult}>AC</button>
        <button onClick={inputNumber, changeSign}>+/-</button>
        <button onClick={inputNumber, percentage}>%</button>
        <button onClick={operatorHandler} className='orange' value='/' >÷</button>

        <button onClick={inputNumber} value={7}>7</button>
        <button onClick={inputNumber} value={8}>8</button>
        <button onClick={inputNumber} value={9}>9</button>
        <button onClick={operatorHandler} value='*' className="orange" >x</button>

        <button onClick={inputNumber} value={4}>4</button>
        <button onClick={inputNumber} value={5}>5</button>
        <button onClick={inputNumber} value={6}>6</button>
        <button onClick={operatorHandler} value='-' className="orange">-</button>

        <button onClick={inputNumber} value={1}>1</button>
        <button onClick={inputNumber} value={2}>2</button>
        <button onClick={inputNumber} value={3}>3</button>
        <button onClick={operatorHandler} value='+' className="orange">+</button>

        <button onClick={inputNumber} className='wide' value={0}>0</button>
        <button onClick={inputNumber} value={','}>,</button>
        <button onClick={calculate} className="orange">=</button>
      </div>
    </div>
  )
}

export default Calculadora
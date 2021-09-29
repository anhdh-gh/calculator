import '../assets/styles/Calculator.css'
import { useState, useRef } from 'react'
import { isNumeric, calculate } from '../utils'

let entering = true, number1 = "", number2 = "", operator = ""

const Calculator = (props) => {

    const [screen, setScreen] = useState("")
    const [input, setInput] = useState("")
    const refInput = useRef()

    // Các hàm xử lý
    const reset = () => {
        setInput("")
        setScreen("")
        number1 = ""
        number2 = ""
        operator = ""
        entering = true
    }

    const addNumber = (number) => {
        if(entering === true) setInput(input + number)
        else {
            if(screen.includes("=") || !isNumeric(number)) reset()
            setInput(number)
            entering = true
        }
        refInput.current.scrollLeft = refInput.current.scrollWidth
    }

    const backHandler = () => {
        if(input.length !== 0 && entering === true) {
            if(input.length === 2 && input.charAt(0) === "-") setInput("")
            else setInput(input.substring(0, input.length - 1))
        } 
    }

    const amHandler = () => {
        if(input.length !== 0 && entering === true) {
            const c = input.charAt(0)
            if(c === '-') setInput(input.substring(1))
            else setInput("-" + input)
        }
        refInput.current.scrollLeft = 0
    }

    const dotHandler = () => {
        if(input.length !== 0 && entering === true) {
            const c = input.charAt(input.length - 1)
            if(c !== "-" && !input.includes(".")) setInput(input + ".");
        }
    }

    const addOperator = (operatorInput) => {
        if(input.length !== 0 && isNumeric(input)) {
            if(screen.includes("=")) number1 = input
            if(entering === true) {
                if(number1.length === 0) number1 = input
                else {
                    number2 = input
                    number1 = calculate(number1, number2, operator).toString()
                }
                entering = false
            }
            setInput(number1)
            setScreen(number1 + " " + operatorInput)
            operator = operatorInput
        }
    }

    const bangHandler = () => {
        if(input.length !== 0 && number1.length !== 0 && operator.length !== 0 && isNumeric(input)) {
            number2 = input
            if(screen.includes("=")) {
                setScreen(number2 + " " + operator + " " + number1 + " =")
                setInput(calculate(number2, number1, operator).toString())
            }
            else {
                setScreen(number1 + " " + operator + " " + number2 + " =")
                setInput(calculate(number1, number2, operator).toString())
                number1 = number2
            }
            entering = false
        }
    }

    // Render giao diện
    return <div className="calculator-container">
        {/* Phần hiển thị phép tính */}
        <input type="text" className="calculator-screen" value={screen} readOnly/>

        {/* Phần nhập số */}
        <input type="text" ref={refInput} className="calculator-input" value={input} readOnly/>

        {/* Phần các nút ấn */}
        <div className="calculator-buttons">
            <button type="button" className="function noselect">OFF</button>
            <button type="button" className="function noselect" onClick={reset}>AC</button>
            <button type="button" className="number noselect" onClick={backHandler}>⬅</button>
            <button type="button" className="operator noselect" onClick={() => addOperator('÷')}>÷</button>

            <button type="button" className="number noselect" onClick={() => addNumber('7')}>7</button>
            <button type="button" className="number noselect" onClick={() => addNumber('8')}>8</button>
            <button type="button" className="number noselect" onClick={() => addNumber('9')}>9</button>
            <button type="button" className="operator noselect" onClick={() => addOperator('×')}>×</button>

            <button type="button" className="number noselect" onClick={() => addNumber('4')}>4</button>
            <button type="button" className="number noselect" onClick={() => addNumber('5')}>5</button>
            <button type="button" className="number noselect" onClick={() => addNumber('6')}>6</button>
            <button type="button" className="operator noselect" onClick={() => addOperator('–')}>–</button>

            <button type="button" className="number noselect" onClick={() => addNumber('1')}>1</button>
            <button type="button" className="number noselect" onClick={() => addNumber('2')}>2</button>
            <button type="button" className="number noselect" onClick={() => addNumber('3')}>3</button>
            <button type="button" className="operator noselect" onClick={() => addOperator('+')}>+</button>

            <button type="button" className="number noselect" onClick={amHandler}>+/-</button>
            <button type="button" className="number noselect" onClick={() => addNumber('0')}>0</button>
            <button type="button" className="number noselect" onClick={dotHandler}>•</button>
            <button type="button" className="primary noselect" onClick={bangHandler}>=</button>
        </div>
    </div>
}

export default Calculator;
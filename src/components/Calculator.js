import '../assets/styles/Calculator.css'
import { useState, useRef, useEffect } from 'react'
import { isNumeric, calculate } from '../utils'

let entering = true, number1 = "", number2 = "", operator = ""

const Calculator = (props) => {

    const [screen, setScreen] = useState("")
    const [input, setInput] = useState("")

    const inputRef = useRef()
    const calculatorRef = useRef()
    const key0 = useRef()
    const key1 = useRef()
    const key2 = useRef()
    const key3 = useRef()
    const key4 = useRef()
    const key5 = useRef()
    const key6 = useRef()
    const key7 = useRef()
    const key8 = useRef()
    const key9 = useRef()
    const keyCong = useRef()
    const keyTru = useRef()
    const keyNhan = useRef()
    const keyChia = useRef()
    const keyAm = useRef()
    const keyBack = useRef()
    const keyAc = useRef()
    const keyDot = useRef()
    const keyBang = useRef()

    useEffect(() => {
        calculatorRef.current.addEventListener('mouseover', () => inputRef.current.focus())
        calculatorRef.current.addEventListener('keydown', e => keyPress(e.key, e.code))
    }, [])

    // Các hàm xử lý
    const keyPress = (key, code) => { 
        switch(key) {
            case '0':
                key0.current.click()
                break
            case '1':
                key1.current.click()
                break
            case '2':
                key2.current.click()
                break
            case '3':
                key3.current.click()
                break
            case '4':
                key4.current.click()
                break
            case '5':
                key5.current.click()
                break
            case '6':
                key6.current.click()
                break
            case '7':
                key7.current.click()
                break
            case '8':
                key8.current.click()
                break
            case '9':
                key9.current.click()
                break
            case '+':
                keyCong.current.click()
                break
            case '-':
                if(code === 'NumpadSubtract')
                    keyTru.current.click()
                else keyAm.current.click()
                break
            case '*':
                keyNhan.current.click()
                break
            case '/':
                keyChia.current.click()
                break
            case 'Backspace':
                console.log('fasd')
                keyBack.current.click()
                break
            case ' ':
                keyAc.current.click()
                break
            case ',':
            case '.':
                keyDot.current.click()
                break
            case 'Enter':
            case '=':
                keyBang.current.click()
                break
            default:
        }        
    }

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
        inputRef.current.scrollLeft = inputRef.current.scrollWidth
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
        inputRef.current.scrollLeft = 0
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
    return <div className="calculator-container" ref={calculatorRef}>
        {/* Phần hiển thị phép tính */}
        <input type="text" className="calculator-screen" value={screen} readOnly/>

        {/* Phần nhập số */}
        <input type="text" ref={inputRef} className="calculator-input" value={input} readOnly/>

        {/* Phần các nút ấn */}
        <div className="calculator-buttons">
            <button type="button" className="function noselect">OFF</button>
            <button ref={keyAc} type="button" className="function noselect" onClick={reset}>AC</button>
            <button ref={keyBack} type="button" className="number noselect" onClick={backHandler}>⬅</button>
            <button ref={keyChia} type="button" className="operator noselect" onClick={() => addOperator('÷')}>÷</button>

            <button ref={key7} type="button" className="number noselect" onClick={() => addNumber('7')}>7</button>
            <button ref={key8} type="button" className="number noselect" onClick={() => addNumber('8')}>8</button>
            <button ref={key9} type="button" className="number noselect" onClick={() => addNumber('9')}>9</button>
            <button ref={keyNhan} type="button" className="operator noselect" onClick={() => addOperator('×')}>×</button>

            <button ref={key4} type="button" className="number noselect" onClick={() => addNumber('4')}>4</button>
            <button ref={key5} type="button" className="number noselect" onClick={() => addNumber('5')}>5</button>
            <button ref={key6} type="button" className="number noselect" onClick={() => addNumber('6')}>6</button>
            <button ref={keyTru} type="button" className="operator noselect" onClick={() => addOperator('–')}>–</button>

            <button ref={key1} type="button" className="number noselect" onClick={() => addNumber('1')}>1</button>
            <button ref={key2} type="button" className="number noselect" onClick={() => addNumber('2')}>2</button>
            <button ref={key3} type="button" className="number noselect" onClick={() => addNumber('3')}>3</button>
            <button ref={keyCong} type="button" className="operator noselect" onClick={() => addOperator('+')}>+</button>

            <button ref={keyAm} type="button" className="number noselect" onClick={amHandler}>+/-</button>
            <button ref={key0} type="button" className="number noselect" onClick={() => addNumber('0')}>0</button>
            <button ref={keyDot} type="button" className="number noselect" onClick={dotHandler}>•</button>
            <button ref={keyBang} type="button" className="primary noselect" onClick={bangHandler}>=</button>
        </div>
    </div>
}

export default Calculator
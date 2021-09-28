import '../assets/styles/Calculator.css'

const Calculator = (props) => {
    return <div className="calculator-container">
        {/* Phần hiển thị phép tính */}
        <input type="text" className="calculator-screen" readOnly></input>

        {/* Phần nhập số */}
        <input type="text" className="calculator-input" readOnly></input>

        {/* Phần các nút ấn */}
        <div className="calculator-buttons">
            <button type="button" className="function">OFF</button>
            <button type="button" className="function">AC</button>
            <button type="button" className="number">⬅</button>
            <button type="button" className="operator">÷</button>

            <button type="button" className="number">7</button>
            <button type="button" className="number">8</button>
            <button type="button" className="number">9</button>
            <button type="button" className="operator">×</button>

            <button type="button" className="number">4</button>
            <button type="button" className="number">5</button>
            <button type="button" className="number">6</button>
            <button type="button" className="operator">–</button>

            <button type="button" className="number">1</button>
            <button type="button" className="number">2</button>
            <button type="button" className="number">3</button>
            <button type="button" className="operator">+</button>

            <button type="button" className="number">+/-</button>
            <button type="button" className="number">0</button>
            <button type="button" className="number">•</button>
            <button type="button" className="primary">=</button>
        </div>
    </div>
}

export default Calculator;
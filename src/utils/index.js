export const isNumeric = (str) => {
    if (typeof str != "string") return false // we only process strings!  
    if(str.includes('Infinity')) return false
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export const calculate = (number1, number2, operator) => {
    const n1 = parseFloat(number1)
    const n2 = parseFloat(number2)
    switch(operator) {
        case "+":
            return n1 + n2
        case "–":
            return n1 - n2
        case "×":
            return n1 * n2
        case "÷":
            return n1 / n2
        default:
            return 0
    }    
}
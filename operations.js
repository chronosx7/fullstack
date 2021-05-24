/**
 * Summs all of the elements in an array and returns the result
 * 
 * @param {array} operands 
 * @returns Number sum of elements within the operands array
 */
function add(operands){
    return operands.reduce((total, operand) => total + operand)
}
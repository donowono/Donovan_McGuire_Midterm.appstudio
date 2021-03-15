let intOne = parseInt(prompt('Enter a number:'))
let intTwo = parseInt(prompt('Enter a number:'))
let intThree = parseInt(prompt('Enter a number:'))

function calcAvgSquare (num1, num2, num3){
    avg = ((num1 + num2 + num3) / 3)
    square = num1 * num1
    avgSquare = avg * square
    return avgSquare
    }
    
calcAvgSquare(intOne, intTwo, intThree)

console.log(`The answer is ${avgSquare}`)


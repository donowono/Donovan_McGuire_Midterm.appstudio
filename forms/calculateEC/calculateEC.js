
remainderOrAvg = confirm("Press 'OK' to calculate the average of three numbers or 'Cancel' for the remainder of two numbers")

if (remainderOrAvg == true){
    intOne = parseInt(prompt('Enter a number:'))
    intTwo = parseInt(prompt('Enter a number:'))
    intThree = parseInt(prompt('Enter a number:'))
    function calcAvgSquare (num1, num2, num3){
        avg = ((num1 + num2 + num3) / 3)
        square = num1 * num1
        avgSquare = avg * square
        return avgSquare
        }
        calcAvgSquare(intOne, intTwo, intThree)
        console.log(`The answer is ${avgSquare}`)
    } else {
        intOne = parseInt(prompt('Enter a number:'))
        intTwo = parseInt(prompt('Enter a number:'))
        function divideTwo (num1, num2){
        remainder = num1 % num2
        return remainder
        }
        divideTwo(intOne,intTwo)
        console.log(`The answer is ${remainder}`)
        }
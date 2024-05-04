function secondHighestNumber(arr) {
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => a - b).pop();
    return uniqueArr.pop();
}

function numberCombination(arr1, arr2) {
    const combinations = [];
    arr1.forEach(item1 => {
        arr2.forEach(item2 => {
            if (item1 < item2) {
                const combination = `${item1},${item2}`;
                if (!combinations.includes(combination)) {
                    combinations.push(combination);
                }
            }
        });
    });
    return combinations;
}


function average(arr) {
    if (arr.length === 0) return 0;
    const half = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(-half);
    const averageFirstHalf = Math.floor(firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length);
    const averageSecondHalf = Math.floor(secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length);
    return Math.max(averageFirstHalf, averageSecondHalf);
}

function isSameLastDigit(num1, num2) {
    return (num1 % 10) === (num2 % 10);
}

function oddAndEven(arr) {
    const evenCount = arr.filter(n => n % 2 === 0).length;
    const oddCount = arr.length - evenCount;
    return `Number of even numbers: ${evenCount}. Number of odd numbers: ${oddCount}.`;
}

function getNumbersFromUser(message) {
    const input = prompt(message);
    if (input) {
        const numbers = input.split(',').map(Number).filter(num => !isNaN(num));
        const isValid = input.split(',').every((char, index) => {
            if (index === 0 || index === input.length - 1) {
                return true; 
            }
            return char.trim() !== ''; 
        }) && numbers.length === input.split(',').length; 
        if (isValid) {
            return numbers;
        } else {
            alert("Invalid input. Please enter valid numbers separated by commas without spaces.");
            return null; 
        }
    } else {
        alert("Must enter number!");
        return null; 
    }
}


function mainMenu() {
    let choice = "";
    while (choice.toLowerCase() !== 'quit') {
        choice = prompt("Please enter the number corresponding to the function you wish to select: \n1. Second Highest Number\n2. Number Combination\n3. Average\n4. Same Last Digit\n5. Odd and Even\nType 'Quit' to exit.");

        if (choice === '1') {
            const numsForHighest = getNumbersFromUser("Enter numbers separated by ',' for the Second Highest Number:");
            if (numsForHighest !== null && numsForHighest.every(num => Number.isInteger(num))) {
                if (numsForHighest.length < 2) {
                    alert("Please enter at least two numbers.");
                } else {
                    alert(`The second highest number is ${secondHighestNumber(numsForHighest)}`);
                }
            }
        } else if (choice === '2') {
            const arr1 = getNumbersFromUser("Enter the first array of numbers separated by ',':");
            if (arr1 !== null && arr1.every(num => Number.isInteger(num))) {
                const arr2 = getNumbersFromUser("Enter the second array of numbers separated by ',':");
                if (arr2 !== null && arr2.every(num => Number.isInteger(num))) {
                    const combinations = numberCombination(arr1, arr2);
                    alert(`${combinations.join('\n')}\nThe number of combinations is: ${combinations.length}`);
                }
            }
        } else if (choice === '3') {
            const numsForAverage = getNumbersFromUser("Enter numbers separated by ',' for Average calculation:");
            if (numsForAverage !== null && numsForAverage.every(num => Number.isInteger(num))) {
                alert(`The larger average is ${average(numsForAverage)}`);
            }
        } else if (choice === '4') {
            const num1 = parseInt(prompt("Enter the first number for Same Last Digit check:"));
            if (!isNaN(num1)) {
                const num2 = parseInt(prompt("Enter the second number for Same Last Digit check:"));
                if (!isNaN(num2)) {
                    alert(`Do the numbers have the same last digit? ${isSameLastDigit(num1, num2)}`);
                }
            }
        } else if (choice === '5') {
            const numsForOddEven = getNumbersFromUser("Enter numbers separated by ',' for Odd and Even count:");
            if (numsForOddEven !== null && numsForOddEven.every(num => Number.isInteger(num))) {
                alert(oddAndEven(numsForOddEven));
            }
        } else if (choice.toLowerCase() === 'quit') {
            alert("Exiting the program. Goodbye!");
        } else {
            alert("Invalid choice. Please enter a number from 1 to 5, or type 'Quit' to exit.");
        }
    }
}

mainMenu();

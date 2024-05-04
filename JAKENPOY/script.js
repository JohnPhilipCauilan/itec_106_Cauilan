function secondHighestNumber(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => a - b).pop();
  return uniqueArr.pop();
}

function numberCombination(arr1, arr2) {
  const combinations = [];
  arr1.forEach(item1 => {
    arr2.forEach(item2 => {
      if (item1 !== item2) {
        combinations.push(item1, item2);
      }
    });
  });
  return combinations;
}

function average(arr) {
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

function mainMenu() {
  let choice = prompt("Please enter the number you wish to select: \n1. Second Highest Number\n2. Number Combination\n3. Average\n4. Same Last Digit\n5. Odd and Even");

  while (choice !== null) {
    switch (choice) {
      case '1':
        const numsForHighest = getNumbersFromUser("Enter numbers separated by space for the Second Highest Number:");
        alert(`The second highest number is ${secondHighestNumber(numsForHighest)}`);
        break;
      case '2':
        const arr1 = getNumbersFromUser("Enter the first array of numbers separated by space:");
        const arr2 = getNumbersFromUser("Enter the second array of numbers separated by space:");
        alert(`The combinations are: ${numberCombination(arr1, arr2).join(', ')}`);
        break;
      case '3':
        const numsForAverage = getNumbersFromUser("Enter numbers separated by space for Average calculation:");
        alert(`The larger average is ${average(numsForAverage)}`);
        break;
      case '4':
        const num1 = parseInt(prompt("Enter the first number for Same Last Digit check:"));
        const num2 = parseInt(prompt("Enter the second number for Same Last Digit check:"));
        alert(`Do the numbers have the same last digit? ${isSameLastDigit(num1, num2)}`);
        break;
      case '5':
        const numsForOddEven = getNumbersFromUser("Enter numbers separated by space for Odd and Even count:");
        alert(oddAndEven(numsForOddEven));
        break;
      default:
        alert("Invalid choice, please enter a number from 1 to 5.");
        break;
    }
    // Prompt again for continuous operation until the user cancels
    choice = prompt("Please enter the number you wish to select: \n1. Second Highest Number\n2. Number Combination\n3. Average\n4. Same Last Digit\n5. Odd and Even");
  }
}

function getNumbersFromUser(message) {
  const input = prompt(message);
  return input ? input.split(' ').map(Number) : [];
}

mainMenu();
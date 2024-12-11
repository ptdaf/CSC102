


const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function cleanString(inputStr) {
    // Remove non-alphanumeric characters and convert to lowercase
    const regex = /[^a-zA-Z0-9]/g;
    return inputStr.toLowerCase().replace(regex, '');
}

function isPalindrome() {
    const inputStr = textInput.value.trim(); // Get the value from the input field and trim extra spaces
    if (inputStr === "") {
        result.innerHTML = "Please input a value."; // Show feedback directly on the UI
        return;
    }

    const cleanedStr = cleanString(inputStr);
    const len = cleanedStr.length;

    // Loop through the first half of the string and compare with the second half
    for (let i = 0; i < len / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
            result.innerHTML = `${inputStr} is not a Palindrome`;
            return;
        }
    }

    result.innerHTML = `${inputStr} is a Palindrome`;
    textInput.value = ""; // Clear the input field after checking
}

// Add event listener to the check button
checkButton.addEventListener("click", isPalindrome);

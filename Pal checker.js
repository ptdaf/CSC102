


    const textInput = document.getElementById('text-input');
    const checkButton = document.getElementById('check-btn');
    const result = document.getElementById('result');

function isPalindrome() {
    const inputStr = textInput.value; // Get the value from the input field
    if (inputStr === "") {
        alert("Please input a value");
        return;
    }

    // Remove non-alphanumeric characters and convert to lowercase
    const regex = /[^a-zA-Z0-9]/g;
    const cleanedStr = inputStr.toLowerCase().replace(regex, '');

    // Check if the cleaned string is the same forwards and backwards
    if (cleanedStr === cleanedStr.split('').reverse().join('')) {
        result.innerHTML = `${inputStr} is a Palindrome`;
    } else {
        result.innerHTML = `${inputStr} is not a Palindrome`;
    }
    
    textInput.value = ""; // Clear the input field after checking
}

// Add event listener to the check button
checkButton.addEventListener("click", isPalindrome);

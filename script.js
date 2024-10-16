//variable for DOM Elements
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

//Regex for number sequence
const numRegex = /^1?\s?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/;

//check button (submit result)
checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    animation(checkBtn);
    checkValidity(userInput.value.trim());
})

//Function for checking entries
const checkValidity = (num) => {
    if (num === "" || !/\d/.test(num)){
        alert("Please provide a phone number");
        return;

    } else { //test regex
        const message = numRegex.test(num) 
        ? `Valid US number: ${num}` 
        : `Invalid US number: ${num}`;
        const newLine = document.createElement("p");
        newLine.textContent = message;
        result.appendChild(newLine);
        result.classList.remove("hidden");
    }
}

//Function reset
const reset = () => {
    result.textContent = "";
    userInput.value = "";
    result.classList.add("hidden");
}

//clear button
clearBtn.addEventListener("click", () => {
    animation(clearBtn);
    reset();
});

//function to clear button click
const animation = (btn) => {
    btn.classList.add("clicked");

    setTimeout(() => {
        btn.classList.remove("clicked");
    }, 1000);
}
let display = document.getElementById("display");

// Append character to the display
function appendCharacter(char) {
    display.value += char;
}

// Clear display
function clearDisplay() {
    display.value = "";
    localStorage.removeItem("lastCalc");
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);  // Evaluating the entered expression
        localStorage.setItem("lastCalc", display.value);  // Save last calculation
    } catch {
        display.value = "Error";
    }
}

// Load last saved calculation from localStorage
window.onload = function() {
    const savedCalc = localStorage.getItem("lastCalc");
    if (savedCalc) {
        display.value = savedCalc;
    }
};

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Enable keyboard input for the calculator
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) {
        if (key === "=" || key === "Enter") {
            calculateResult();
        } else {
            appendCharacter(key);
        }
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);  // Remove last character
    } else if (key === "Escape") {
        clearDisplay();
    }
});

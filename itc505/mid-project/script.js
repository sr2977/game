let story = {
    start: {
        text: "Welcome to the Math Adventure! Choose your path:",
        choices: ["Algebra Challenge", "Geometry Quest"],
        consequence: ["algebraChallenge", "geometryQuest"],
        image: "math.jpg"
    },
    algebraChallenge: {
        text: "You encounter an algebraic equation. Solve it to proceed: 2x + 5 = 11",
        choices: ["x = 3", "x = 2", "x = 4"],
        consequence: ["algebraCorrect", "algebraIncorrect", "algebraIncorrect"],
        image: "algebra.jpg"
    },
    algebraCorrect: {
        text: "Congratulations! You solved the equation correctly. Here's another one: 3y - 7 = 14. What is y?",
        choices: ["y = 5", "y = 7", "y = 8"],
        consequence: ["algebraCorrect2", "algebraIncorrect2", "algebraIncorrect2"],
        image: "algebra.jpg"
    },
    algebraIncorrect: {
        text: "Oops! That's incorrect. The adventure continues.",
        choices: ["Continue"],
        consequence: ["start"],
        image: "failure.jpg"
    },
    algebraCorrect2: {
        text: "Well done! You've mastered algebra. Now, a final challenge: 4z + 9 = 25. Solve for z.",
        choices: ["z = 4", "z = 5", "z = 6"],
        consequence: ["algebraCorrectFinal", "algebraIncorrectFinal", "algebraIncorrectFinal"],
        image: "algebra.jpg"
    },
    algebraIncorrect2: {
        text: "Not quite right. Let's move forward.",
        choices: ["Continue"],
        consequence: ["start"],
        image: "failure.jpg"
    },
    algebraCorrectFinal: {
        text: "Congratulations! You've successfully completed the Algebra Challenge. What's next?",
        choices: ["Continue"],
        consequence: ["start"],
        image: "success.jpg"
    },
    algebraIncorrectFinal: {
        text: "Oops! The final challenge eluded you. The adventure continues.",
        choices: ["Continue"],
        consequence: ["start"],
        image: "failure.jpg"
    },
    geometryQuest: {
        text: "You embark on a geometry quest. What is the area of a square with side length 6?",
        choices: ["36", "12", "18"],
        consequence: ["geometryCorrect", "geometryIncorrect", "geometryIncorrect"],
        image: "geometry.jpg"
    },
    geometryCorrect: {
        text: "Well done! You calculated the area correctly. Here's another question: What is the perimeter of a rectangle with length 8 and width 5?",
        choices: ["26", "30", "18"],
        consequence: ["geometryCorrect2", "geometryIncorrect2", "geometryIncorrect2"],
        image: "geometry.jpg"
    },
    geometryIncorrect: {
        text: "Not quite right. Let's move forward.",
        choices: ["Continue"],
        consequence: ["start"],
        image: "failure.jpg"
    },
    geometryCorrect2: {
        text: "Correct! You're acing geometry. Now, a final challenge: What is the volume of a cube with side length 3?",
        choices: ["27", "18", "9"],
        consequence: ["geometryCorrectFinal", "geometryIncorrectFinal", "geometryIncorrectFinal"],
        image: "geometry.jpg"
    },
    geometryIncorrect2: {
        text: "Oops! That's incorrect. The adventure continues.",
        choices: ["Continue"],
        consequence: ["start"],
        image: "failure.jpg"
    },
    geometryCorrectFinal: {
        text: "Congratulations! You've successfully completed the Geometry Quest. What's next?",
        choices: ["Continue"],
        consequence: ["start"],
        image: "success.jpg"
    },
    geometryIncorrectFinal: {
        text: "Oops! The final challenge eluded you. The adventure continues.",
        choices: ["Continue"],
        consequence: ["start"],
        image: "failure.jpg"
    },
};



// ... rest of the code remains unchanged
let currentState = "start";

function startGame() {
    currentState = "start";
    updatePage();
}

function updatePage() {
    let stage = story[currentState];
    document.getElementById("story").innerText = stage.text;

    // Create buttons for choices
    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    for (let i = 0; i < stage.choices.length; i++) {
        let button = document.createElement("button");
        button.innerText = stage.choices[i];
        button.addEventListener("click", function() {
            makeChoice(i);
        });
        choicesDiv.appendChild(button);
    }

    // Update image
    document.getElementById("image-container").innerHTML = `<img src="${stage.image}" alt="Story Image">`;
}

function makeChoice(choiceIndex) {
    let stage = story[currentState];
    let nextStageKey = stage.consequence[choiceIndex];
    
    if (nextStageKey in story) {
        currentState = nextStageKey;
        updatePage();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("story").innerText = "Thanks for playing the Math Adventure!";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("image-container").innerHTML = `<img src="end.jpg" alt="End Image">`;
}

// Initialize the game
startGame();
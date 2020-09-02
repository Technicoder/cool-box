// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

console.log('it works');

const myGreeting = document.getElementById(
    'greeting'
);
const myInput = document.getElementById('greetingInput');
const myButton = document.getElementById('greetingButton');


console.log(myGreeting);
console.log(myInput);
console.log(myButton);

// telling the button to listen for clicks
myButton.addEventListener('click', () => {
    console.log(Date());
    //grab the current value of the text input
    const userInput = myInput.value;
    console.log(userInput);
    myGreeting.textContent = userInput;
});


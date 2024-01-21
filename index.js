import inquirer from 'inquirer';
const questions = [{
        name: "num1",
        type: "number",
        message: "Enter your number1?",
    },
    {
        name: 'num2',
        type: "number",
        message: "Enter your number2?",
    },
    {
        name: 'operators',
        type: "list",
        message: "what  number2?",
        choices: ["*", "+", "-", "/"]
    }
];
var answers = inquirer.prompt(questions);
// console.log("Answers, ", answers)
answers.then((answers) => {
    switch (answers.operators) {
        case "*":
            console.log(`${answers.num1}*${answers.num2} = ${answers.num1 * answers.num2}`);
            break;
        case "+":
            console.log(`${answers.num1}+${answers.num2} = ${answers.num1 + answers.num2}`);
            break;
        case "-":
            console.log(`${answers.num1}-${answers.num2} = ${answers.num1 - answers.num2}`);
            break;
        case "/":
            console.log(`${answers.num1}/${answers.num2} = ${answers.num1 / answers.num2}`);
            break;
        default:
            break;
    }
    // console.log("answers",answers)
})
    .catch((err) => {
    console.log("error", err);
});

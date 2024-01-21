import inquirer, { Answers, QuestionCollection } from 'inquirer'; 
const questions:QuestionCollection = [{
    name:"num1",
    type:"number",
    message: "Enter your number1?",
},
{
name:'num2',
type:"number",
message: "Enter your number2?",


},
{
    name:'operators',
    type:"list",
    message: "what  number2?",
    choices:["*","+","-","/"] 
    }

]
var answers:Promise<Answers> = inquirer.prompt(questions);
// console.log("Answers, ", answers)
answers.then((answers:Answers) =>{

switch (answers.operators) {
    case "*":
        console.log(`${answers.num1}*${answers.num2} = ${answers.num1*answers.num2}`);
        break;
        case "+":
            console.log(`${answers.num1}+${answers.num2} = ${answers.num1+answers.num2}`);
            break;
            case "-":
                console.log(`${answers.num1}-${answers.num2} = ${answers.num1-answers.num2}`);
                break;
   
                case "/":
                    console.log(`${answers.num1}/${answers.num2} = ${answers.num1/answers.num2}`);
                    break;
        default:
        break;
}




    // console.log("answers",answers)
}) 
.catch((err)=>{
console.log("error",err)
})
//const Manager = require("./lib/manager");
//const Engineer = require("./lib/engineer");
//const Intern = require("./lib/intern");
const inquirer = require("inquirer");
//const path = require("path");
//const fs = require("fs");

//const OUTPUT_DIR = path.resolve(__dirname, "output")
//const outputPath = path.join(OUTPUT_DIR, "team.html");

//const render = require("./lib/htmlRenderer");

inquirer.prompt([
    {
        type:"input",
        name:"Name",
        message:"What is your name?"
    },
    {
        type:"checkbox",
        name:"Occupation",
        choices:["Manager", "Engineer", "Intern"]
    },
    {
        type:"input",
        name:"ID",
        message:"ID Number?"
    },
    {
        type:"input",
        name:"Email",
        message:"Provide Your Email."
    }
    ]).then(function(response){
        const name=(response.name);
        const job= (response.Occupation);
        const ID= (response.ID);
        const email= (response.Email);
    })
//const Manager = require("./lib/manager");
//const Engineer = require("./lib/engineer");
//const Intern = require("./lib/intern");
const classes = require("./class")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

//const render = require("htmlRenderer");

inquirer.prompt([
    {
        type:"input",
        name:"name",
        message:"What is your first name?"
    },
    {
        type:"checkbox",
        name:"Occupation",
        choices:["Manager", "Engineer", "Intern"]
    },{
        type:"confirm",
        name:"check",
        message: "Are you a Manager?"
    },
    {
        type:"input",
        name:"office",
        message:"If you are a Manager, where is your office?"
    },
    {
        type:"confirm",
        name:"check",
        message: "Are you a Engineer?"
    },
    {
        type:"input",
        name:"gitHub",
        message:"If you are a Engineer, what is your Github?"
    },{
        type:"confirm",
        name:"check",
        message: "Are you a Intern?"
    },
    {
        type:"input",
        name:"school",
        message:"If you are a Intern, What school do you attend?"
    },
    {
        type:"input",
        name:"id",
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
        const id= (response.id);
        const email= (response.Email);
        const office= (response.office)

        class employee {
            constructor(name, email, id){
                this.name= name;
                this.id= id;
                this.email= email;
            };
            getName(){
                this.name = name;
            };
            getID(){
                (this.id)
            };
            getEmail(){
                (this.email)
            };
            getjob(){
                (this.name)
            };
        };

        class Manager extends employee {
            constructor(office){
                super(name, email, id);
                this.office= office
            }
            getRole(){
                
            };
        };

        class Engineer extends employee {
            constructor(gitHub, gitUser){
                super(name, email, id);
                this.gitHub= gitHub;
                this.gitHubUser= gitUser;
            }
            getGithub(){
        
            };
            getRole() {
        
            };
        };
        
        class intern extends employee{
            constructor(school){
                super(name, email, id);
                this.school= school;
            }
            getSchool(){
        
            }
            getRole(){
        
            };
        };

    const manageTemplate = `<!doctype html>
    <html lang="en">
      <head>
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${name}</div>
            <div class="card-body text-primary">
              <h5 class="card-title">${job}</h5>
              <p class="card-text">${id}</p>
              <p class="card-text">${email}</p>
              <p class="card-text">${office}</p>
            </div>
          </div>
      </body>
    </html>`

    fs.writeFile('manager.html', manageTemplate, error =>{
        if(error){
            console.log("error");
        } else {
            console.log("success")
        }
    })

    const engineerTemplate = `<!doctype html>
    <html lang="en">
      <head>
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${name}</div>
            <div class="card-body text-primary">
              <h5 class="card-title">${job}</h5>
              <p class="card-text">${id}</p>
              <p class="card-text">${email}</p>
              <p class="card-text">${office}</p>
            </div>
          </div>
      </body>
    </html>`

    const internTemplate = `<!doctype html>
    <html lang="en">
      <head>
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${name}</div>
            <div class="card-body text-primary">
              <h5 class="card-title">${job}</h5>
              <p class="card-text">${id}</p>
              <p class="card-text">${email}</p>
              <p class="card-text">${office}</p>
            </div>
          </div>
      </body>
    </html>`

 });
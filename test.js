const classes = require("./class")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const questions = {
    manager= [
        {
            type:"input",
            name:"Mananame",
            message:"What is your first name?"
        },
        {
            type:"confirm",
            name:"Manacheck",
            message: "Are you a Manager?"
        },
        {
            type:"input",
            name:"office",
            message:"If you are a Manager, where is your office?"
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
    ],
    engineer: [
        {
            type:"input",
            name:"Engianame",
            message:"What is your first name?"
        },
        {
            type:"confirm",
            name:"Engicheck",
            message: "Are you a Engineer?"
        },
        {
            type:"input",
            name:"gitUser",
            message:"If you are a Engineer, what is your Github?"
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
    ],
    intern: [
        {
            type:"input",
            name:"Intername",
            message:"What is your first name?"
        },
        {
            type:"confirm",
            name:"Intercheck",
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
    ]
}
inquirer.prompt(questions.manager).then(function(response){
        const name=(response.name);
        const job= (response.Occupation);
        const id= (response.id);
        const email= (response.Email);
        const office= (response.office);
        const gitHubUser= (response.gitUser);
        const university = (response.school);

inquirer.prompt(questions.manager).then(function(response){
            const name=(response.name);
            const job= (response.Occupation);
            const id= (response.id);
            const email= (response.Email);
            const office= (response.office);
            const gitHubUser= (response.gitUser);
            const university = (response.school);

        class employee {
            constructor(name, email, id){
            };
            getName(){
                this.name = name;
            };
            getID(){
                this.id = id;
            };
            getEmail(){
                this.email = email
            };
            getjob(){
                this.job = job
            };
        };



        class Manager extends employee {
            constructor(office){
                super(name, email, id);
                this.office= office
            }
            getRole(){
                if(this.job === "Manager"){
                    inquirer.prompt([
                        {
                            type:"input",
                            name:"office",
                            message:"Where is your office?"
                        }
                    ])
                }
                
            };
        };

        class Engineer extends employee {
            constructor(gitHubUser){
                super(name, email, id);
                this.gitHubUser= gitHubUser;
            }
            getGithub(){
        
            };
            getRole() {
        
            };
        };
        
        class intern extends employee{
            constructor(university){
                super(name, email, id);
                this.school= university;
            }
            getSchool(){
                this.school
            }
        };

    const manageTemplate = `<!doctype html>
    <html lang="en">
      <head>
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${name}</div>
            <div class="card-body text-primary">
              <h5 class="card-title">${job}</h5>
              <p class="card-text">Badge ID: ${id}</p>
              <p class="card-text">"My Email is " ${email}</p>
              <p class="card-text">"My office number is "${office}</p>
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
    });

    const engineerTemplate = `<!doctype html>
    <html lang="en">
      <head>
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${name}</div>
            <div class="card-body text-primary">
              <h5 class="card-title">${job}</h5>
              <p class="card-text">${id}</p>
              <p class="card-text">${email}</p>
              <p class="card-text">${gitHubUser}</p>
            </div>
          </div>
      </body>
    </html>`

    fs.writeFile('engineer.html', engineerTemplate, error =>{
        if(error){
            console.log("error");
        } else {
            console.log("success")
        }
    });

    const internTemplate = `<!doctype html>
    <html lang="en">
      <head>
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${name}</div>
            <div class="card-body text-primary">
              <h5 class="card-title">${job}</h5>
              <p class="card-text">${id}</p>
              <p class="card-text">${email}</p>
              <p class="card-text">${university}</p>
            </div>
          </div>
      </body>
    </html>`
    fs.writeFile('intern.html', internTemplate, error =>{
        if(error){
            console.log("error");
        } else {
            console.log("success")
        }
    })


    const mainTemp= `<!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
    
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Software Team!</h1>
              <p class="lead">Welcome to SkyNet! Here is your team!</p>
            </div>
          </div>

          ${manageTemplate}

          ${engineerTemplate}

          ${internTemplate}
    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      </body>
    </html>`
    fs.writeFile('main.html', mainTemp, error =>{
        if(error){
            console.log("error");
        } else {
            console.log("success")
        }
    })

 });
class employee {
    constructor(name, email, id){
        this.name= name;
        this.id= id;
        this.email= email;
    };
    getName(){
        console.log(this.name)
    };
    getID(){
        console.log(this.id)
    };
    getEmail(){
        console.log(this.email)
    };
    getjob(){
        console.log(this.name)
    };
};

/*class Manager extends employee {
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
};*/

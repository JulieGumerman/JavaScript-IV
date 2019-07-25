// CODE here for your Lambda Classes

//***************"Person class" as base-class ***********************/

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

/***Test***/
const loki = new Person ({
    name: "Loki",
    age: "as old as time",
    location: "Valhalla"
});

const thor = new Person ({
    name: "Thor",
    age: "pretty old but doesn't look it",
    location: "Earth or Valhalla, it depends on the day"
})

loki.speak();
console.log(loki.age, loki.name, loki.location);
console.log(thor.age, thor.name, thor.location);
thor.speak();

/*******************Instructors and Project Managers********************/

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }


    messWithGrades(student) {
        let numberGenerator = Math.floor(Math.random() * (25 - (-25)) -25);

        let scoreManipulation = student.grade + numberGenerator;

        let cupcake = function(score) {
            if (score>=70){
                return " You are a Jedi master.";
            } else {
                return " Strong are you with the force, but you are not a Jedi yet";
            }
        } //end cupcake function
        /*console.log(scoreManipulation)*/;
        console.log(scoreManipulation + student.name + cupcake(scoreManipulation));
    }//end messWithGrades


}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }

}

/*Instructors*/

const yoda = new Instructor ({
    name: "Yoda",
    age: 900,
    location: "Dagobah",
    specialty: "Jedi philosophy",
    catchPhrase: "You must unlearn what you have learned"
});

const quiGon = new Instructor ({
    name: "Qui-Gon Jinn",
    age: "dead before his time",
    location: "Naboo",
    specialty: "advanced Jedi fighting techniques",
    catchPhrase: "You did well. I felt the Force move in you"

});

/*Project Managers*/
const obiWan = new ProjectManager ({
    name: "Obi Wan Kenobi",
    age: "not dead...not yet anyway",
    location: "Tatooine",
    specialty: "omitting important pieces of information",
    catchPhrase: "What I said was true...from a certain point of view",
    gradClassName: "the good old days in the Jedi's golden times",
    favInstructor: "Qui-Gonn Jinn"
});

const luke = new ProjectManager ({
    name: "Luke Skywalker",
    age: "depends on the episode",
    location: "Millenium Falcon",
    specialty: "saving the day",
    catchPhrase: "I feel the Force.",
    gradClassName: "home schooled",
    favInstructor: "life"
})

/***Tests***/
yoda.demo("levitation of small objects");
quiGon.demo("looking deep and mysterious");
console.log(yoda.catchPhrase, yoda.age, yoda.location);
console.log(quiGon.name, quiGon.specialty, quiGon.catchPhrase);
console.log(obiWan.age, obiWan.location, obiWan.specialty);
console.log(obiWan.gradClassName, obiWan.favoriteInstructor);
luke.standUp("New Jedi Academy");
obiWan.standUp("School of Life");



/********************Students*********************/

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    
    }

    listsSubjects() {
        this.favSubjects.forEach((subject) => {
            console.log(`This student likes ${subject}`);
        });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);

    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    
    graduate(){
        if (this.grade>=70){
            console.log("You are now a Jedi master");
        } else {
            console.log("Strong are you with the force, but you are not a Jedi yet");
        }
    } 
}

let rey = new Student ({
    name: "Rey",
    age: "unknown",
    location: "Millenium Falcon",
    previousBackground: "scrapper",
    className: "private tutor",
    favSubjects: ["lightsabers", "Jedi philosophy", "piloting"],
    grade: 89,

});

let ben = new Student ({
    name: "Ben Solo",
    age: 25,
    location: "somewhere, sulking",
    previousBackground: "the son of Leia and Han",
    className: "Luke's Jedi Academy",
    favSubjects: ["throwing tantrums", "flexing his superiority", "manipulation"],
    grade: 65
})

/*****Tests*****/
rey.listsSubjects();
ben.listsSubjects();
console.log(ben.name, ben.previousBackground, ben.className);
yoda.grade(rey, "lightsaber safety techniques");
luke.debugsCode(ben, "Jedi combat tactics");
luke.debugsCode(rey, "Jedi Philosophy 101");
quiGon.grade(ben, "Jedi temper remediation");
ben.PRAssignment("dark side leadership techniques");
rey.sprintChallenge("Jedi combat techniques");
ben.graduate();
rey.graduate();
quiGon.messWithGrades(ben);

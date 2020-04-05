let users = [
    {
        username:"Anna",
        pass: "1268",
    },
    {
        username:"Hayk",
        pass: "5613",
    },
    {
        username:"Mary",
        pass: "6863",
    },

];
let patients = [
    {
        name:"Karen",
        decease:"allergy",
    },
    {
        name:"Bob",
        decease:"flu",
    },
    {
        name:"Mariam",
        decease:"parkinson",
    }
];
let deceases = [
    {
        name:"allergy",
        symptomes:["sneezing","blocked nose","red eyes"],
        treatment: ["Antihistamines", "Creams"],
    },
    {
        name:"flu",
        symptomes:["cough","headache","runny nose"],
        treatment: ["Antibiotics","Antiviral drugs"],
    },
    {
        name:"parkinson",
        symptomes:["tremor","shaking","slowed movement"],
        treatment: ["Levodopa", "Carbidopa"],
    }
];

let login = prompt("Please enter Username and Pass with comma");
let usersName = login.split(",");
let greeting;
let patientsDecease;
let deceaseSymptoms;
let deceaseTreatment;
let finalResult;
function validation (users){
    for (i=0; i<users.length; i++) {
        if(users[i].username === usersName[0] && users[i].pass === usersName[1]) {
            greeting = prompt(`Welcome ${usersName[0]}, please enter patient's name`);
        } 
    }
  return greeting;
}

validation(users);

function findPatient (greeting) {      
    for (i=0; i<patients.length; i++) {
        if (patients[i].name === greeting) { 
        patientsDecease = patients[i].decease;
        
        }
    }
return patientsDecease;
}

findPatient(greeting);

function findSymptoms (patientsDecease) {
    for (i=0; i<deceases.length; i++) {
        if (deceases[i].name === patientsDecease) {
            deceaseSymptoms = deceases[i].symptomes;
            deceaseTreatment = deceases[i].treatment;
            finalResult = alert(`The patient has ${patientsDecease}, symptoms are ${deceaseSymptoms} and the treatments are ${deceaseTreatment}`)
        }
    }
return finalResult;
}
findSymptoms(patientsDecease);






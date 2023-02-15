const naissance = prompt("Quelle est votre année de naissance ? ");
let anneeActuel = 2023;
let result = anneeActuel - naissance;

function askBirthYear() {
  document.body.innerHTML += `<h3> Vous avez ${result} ans ! </h3>`;
  alert(result);
}

function askName() {
  let text = "Bonjour ";
  let nom = prompt("Quel est votre nom ?");
  document.body.innerHTML += `<h2> ${text} ${nom} ! </h2>`;
  alert(text + nom);
}
function month() {
  let month = prompt("entrez votre mois de naissance entre 1 et 12");
  let currentMonth = 2; // février
  let mon = month -currentMonth

  if(mon > 0)
    result -= 1
}


askName();
month();
askBirthYear();

// function month(){
//     let month = new Date('Mars 05, 96');
//     console.log(month.getMonth())
// }
// month()

// function getAge(date) {
//     var diff = Date.now() - date.getTime();
//     var age = new Date(diff);

//     return Math.abs(age.getUTCFullYear() - 1970);
// }

// alert(getAge(new Date(1996, 3, 5))); //Date(année, mois, jour)

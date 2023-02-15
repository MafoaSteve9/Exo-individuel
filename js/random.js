let givenNumber

function askNumber() {
    givenNumber = prompt('Entrez un nombre !')

}

function didIwin(givenNumber) {
    while (givenNumber != askNumber) {
        givenNumber = prompt("Entrez un nombre !")

        if (givenNumber < 22) {
            alert("plus grand")

        } else if (givenNumber > 22) {
            alert("plus petit")

        } else if (givenNumber == 22) {
            document.querySelector('p').innerHTML = `Bravo ! Vous avez deviné le nombre "${givenNumber}" 😎`
            return true
        }
          else {
            return false
          }

    }
}

didIwin()
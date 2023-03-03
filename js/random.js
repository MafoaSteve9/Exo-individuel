let givenNumber

function askNumber() {
    givenNumber = prompt('Entrez un nombre !')

}

function didIwin(givenNumber) {
    while (givenNumber != askNumber) {
        givenNumber = prompt("Entrez un nombre entre 0 et 50 !")

        if (givenNumber < 22) {
            alert("plus grand")

        } else if (givenNumber > 22) {
            alert("plus petit")

        } else if (givenNumber == 22) {
            alert(`Bravo ! Vous avez deviné le nombre "${givenNumber}" 😎`)
            return true
        } else {
            return false
        }

    }
}
askNumber()
didIwin()
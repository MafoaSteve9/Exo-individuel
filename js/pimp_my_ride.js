let tripToParse = "Perdita 8 10 8"

function parsTrip(trip) {
   let t = trip.split(" ")
    let objet = {Client: t[0], Start: t[1], Duration: t[2], Price: t[3]}
    return objet
}
console.log(parsTrip(tripToParse))



function parsTrips(trips){
    let result = [];
    for( index of trips){
        let t = parsTrip(index)
        result.push(t)
    }
    return result

}
let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]
console.log(parsTrips(tripsToParse))
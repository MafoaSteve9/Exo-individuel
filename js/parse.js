// let tripToParse = "Perdita 8 10 8"
 
// function parsTrip(trip){
//     trip = tripToParse.split(' ')
//     let objet = { 'Client': trip[0], 'Start': trip[1], 'Duration':trip[2], 'Price':trip[3] }

//     return objet
// }
// parsTrip()

// let tripsToParse = [
// 	"Roger 0 5 10",
// 	"Pongo 3 7 14",
// 	"Perdita 8 10 8",
// 	"Anita 16 3 7"
// ]
// function parseTrips(trips) {
//     let objet = tr
//    console.log(trips)
// }
// parseTrips()

function parseTrips(trips) {
  let result = [];
  for (const currentTrip of trips) {
    let currentTripData = parseTrip(currentTrip);
    result.push(currentTripData);
  }
  return result;
}
let step2 = parseTrips([
  "Roger 0 5 10",
  "Pongo 3 7 14",
  "Perdita 8 10 8",
  "Anita 16 3 7",
]);
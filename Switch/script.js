
let distance = prompt("What is the distance you want to calculate in light years?");
let option = prompt("What unit do you want to convert to?\n1.  Parsec (pc)\n2.  Astronomical Unit (AU)\n3.  kilometers (km)\n\n(Enter the number of the desired option.)");

let userChoice 
let distanceConverted

switch(option) {
    case "1":
        userChoice = 'Parsec'
        distanceConverted = distance * 0.306601
        break
    case "2":
        userChoice = 'Astronomical Unit'
        distanceConverted = distance * 63241.1
        break
    case "3":
        userChoice = 'kilometers'
        distanceConverted = distance * 9.5 * Math.pow(10, 12)   
        break
    default:
        userChoice = 'Unidentified Unit'  
        distanceConverted = 'Out of scope conversion'     
}
alert(`Distance in light years chosen: ${distance}\n ${userChoice}:\n ${distanceConverted}`)
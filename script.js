var fromForm = document.forms.infoForm;
fromForm.onsubmit = submit1;

function submit1() {
var userFName = fromForm.firstname;
var userLName = fromForm.lastname;
var stationCurrent = fromForm.fromstation.value;
var stationFinal = fromForm.tostation.value;
var passengerType = fromForm.passType.value;
var yourFare = 0;
var yourTicket = '';
var soldTickets = [];
var Passenger_Type;

// for checking 
// console.log(userFName.value);
// console.log(passengerType);

// validations for form field

if (userFName.value === "" || userFName.value === null) {
    //alert("field is empty"); // for checking
      userFName.style.borderColor = "red";
      // userFName.focus();
      return false;
    } else {
      userFName.style.borderColor = "lightgreen";
    }
if (userLName.value === "" || userLName.value === null) {
      userLName.style.borderColor = "red";
      // userLName.focus();
      return false;
    } else {
      userLName.style.borderColor = "lightgreen";
    }

    if (stationCurrent === "default" || stationCurrent === null) {
      document.getElementById('fromstation').style.borderColor = "red";
          return false;
        } else {
          document.getElementById('fromstation').style.borderColor = "lightgreen";
        }

    if (stationFinal === "default" || stationFinal === null) {
  document.getElementById('tostation').style.borderColor = "red";
      return false;
    } else {
      document.getElementById('tostation').style.borderColor = "lightgreen";
    }

    if (passengerType === "default" || passengerType === null) {
  document.getElementById('passType').style.borderColor = "red";
      return false;
    } else {
      document.getElementById('passType').style.borderColor = "lightgreen";
    }


var type = {
    Type1 : 'Student',
    Type2 : 'Senior',
    Type3 : 'Adult'
}

// fare predecided for different groups
var fare = {
    Student : 2.5,
    Senior : 1.5,
    Adult : 3.2
}

var bus = {
    BusToKipling: '123C',
    BusB: '46A',
    BusC: '3', // we can add more busses in the future
    BusD: '4'
}
var busNumber = '';

var date = new Date();
var todayDate = date.toDateString();

if(stationCurrent === 'Kipling' && stationFinal === 'Humber'){
busNumber = bus.BusToKipling;
}else {
    busNumber = bus.BusB
}

//  it will check type of passenger ( for now user will select it as a mvp but in future it will collected at the time of sign up)
switch (passengerType) {
    case 'student':
        yourFare = yourFare + fare.Student;
        Passenger_Type = type.Type1;
        break;
    
    case 'senior':
        yourFare = yourFare + fare.Senior;
        Passenger_Type = type.Type2;
        break;
      
    case 'adult':
        yourFare = yourFare + fare.Adult;
        Passenger_Type = type.Type3;
        break;

    default :
    console.log("Select your fare type");

}

//tickets validity

var ticketValidity = new Date(new Date().getTime() + 2*60*60*1000).toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'});

// adding tickets to sold tickets array //  for future use. I want to store every sold out ticket

function submit() {
    var newticketNumber = Math.floor(Math.random() * 90000) + 10000;
    yourTicket = newticketNumber.toString();
       // setting data
    localStorage.setItem("Ticket", newticketNumber);
    soldTickets.push(newticketNumber);
  }

submit();

// updating the values in HTML
document.getElementById("TD1").innerHTML = yourTicket; // Ticket number random
document.getElementById("TD2").innerHTML = stationCurrent; // From station name like Humber College
document.getElementById("TD2_1").innerHTML = stationFinal; // final staion name like Kipling
document.getElementById("TD3").innerHTML = userFName.value + ' ' +  userLName.value; // User Name
document.getElementById("TD4").innerHTML = todayDate; // Today's date
document.getElementById("TD5").innerHTML = busNumber; // Bus number 
document.getElementById("TD6").innerHTML = 'C$ ' + yourFare; // route fare according to passenger type
document.getElementById("TD7").innerHTML = ticketValidity; // Time till the ticket is valid ( 2 hours in this case)
document.getElementById('passengerType').innerHTML = Passenger_Type; // passenger group like student , adult, senior


// for checking purpose
// console.log(todayDate);
// console.log(busNumber);
// console.log(yourFare);
// console.log(yourTicket);
// console.log(soldTickets);
// console.log(todayDate);

document.getElementById("main").style.display = 'block';
document.getElementById("buyTicket").style.display = 'none';
return false;
}
let flight_id=localStorage.getItem("flightid");
let first_name=localStorage.getItem("firstname");
let last_name=localStorage.getItem("lastname");
let contact=localStorage.getItem("contact");
let email=localStorage.getItem("email");
let gender=localStorage.getItem("gender");
let age=localStorage.getItem("age");

const name=first_name+' '+last_name;

flight_id-=1
fetch('flights.json')
.then(response => response.json())
.then(data => display_value(data));

let content='';

function display_value(data)
{   
    departure=new Date(data[flight_id].departTime);
    arrival=new Date(data[flight_id].ArrivalTime);
 content += 
    `
        <div class="details" >
            <div class="flight_details">
            <h1>Ticket Details</h1>
                <h3>${data[flight_id].flightNum}</h3>
                <h3>From: ${data[flight_id].origin}</h3>
                <h3>To: ${data[flight_id].destination}</h3> 
                <h3>Departure:<span>${departure.toUTCString()}</span></h3>
                <h3>Arrival:<span>${arrival.toUTCString()}</span></h3>
                <h3>Fare:<span>&#8377;${data[flight_id].price}</span></h3>
            </div>
            <div class= "passanger_details">
            <h1>Passanger Details</h1>
                <h3 class="pname">Name: ${name}</h3>
                <h3 class="age">Age: ${age}</h3>
                <h3 class="gender">Gender: ${gender}</h3>
                <h3 class="contact">Contact No: ${contact}</h3>
                <h3 class="email">Email: ${email}</h3>
            </div>

    `

    
    document.querySelector("#flight_details").innerHTML = content;

}
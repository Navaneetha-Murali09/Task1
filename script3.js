let flight_id=localStorage.getItem("flightid");
let first_name=localStorage.getItem("firstname1");
let last_name=localStorage.getItem("lastname1");
let contact=localStorage.getItem("contact1");
let email=localStorage.getItem("email1");
let gender=localStorage.getItem("gender1");
let age=localStorage.getItem("age1");
let flag=localStorage.getItem("flag");

let first_name2='',last_name2='',gender2='',age2='';
let name2='';
let content='';

flight_id-=1;
const name1=first_name+' '+last_name;
if(flag==1)
{
    first_name2=localStorage.getItem("firstname2");
    last_name2=localStorage.getItem("lastname2");
    gender2=localStorage.getItem("gender2");
    age2=localStorage.getItem("age2");
    name2=first_name2+' '+last_name2;
    fetch('flights.json')
    .then(response => response.json())
    .then(data => display_value2(data));
}


else{
    fetch('flights.json')
    .then(response => response.json())
    .then(data => display_value(data));

}

function display_value2(data){
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
            <div class= "passanger1_details">
            <h1>Passanger1 Details</h1>
                <h3 class="pname">Name: ${name1}</h3>
                <h3 class="age">Age: ${age}</h3>
                <h3 class="gender">Gender: ${gender}</h3>
                <h3 class="contact">Contact No: ${contact}</h3>
                <h3 class="email">Email: ${email}</h3>
            </div>
            <div class= "passanger2_details">
            <h1>Passanger Details</h1>
                <h3 class="pname">Name: ${name2}</h3>
                <h3 class="age">Age: ${age2}</h3>
                <h3 class="gender">Gender: ${gender2}</h3>
            </div>

    `
    document.querySelector("#flight_details").innerHTML = content;
}

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
                <h3 class="pname">Name: ${name1}</h3>
                <h3 class="age">Age: ${age}</h3>
                <h3 class="gender">Gender: ${gender}</h3>
                <h3 class="contact">Contact No: ${contact}</h3>
                <h3 class="email">Email: ${email}</h3>
            </div>

    `

    document.querySelector("#flight_details").innerHTML = content;

}
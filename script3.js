//getting all the items from local storage
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
//flag item when 0 it calls the function to display the value of one passenger and when flag is 1 it calls the function to display the value of both passenger

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

//function to display the value of both passenger
function display_value2(data){
    departure=new Date(data[flight_id].departTime);
    arrival=new Date(data[flight_id].ArrivalTime);
    content += 
    
    `   <center>
        
        <h1>${data[flight_id].flightNum}</h1>
        <div class=toandfro>
                <h3>${data[flight_id].origin}  </h3>
                <img src="images/logo-ticket.png" width=13%>
                <h3>  ${data[flight_id].destination}</h3>
        </div>
        <div class="time">
            <h3>${departure.toUTCString()}</h3>
            <h3>${arrival.toUTCString()}</h3>
        </div>
        <h2>Passenger Details</h2>
        </center>
        
        <div class="details" >
        
            <div class="flight_details">
                <!--
                <h3 class="contact">Contact No: ${contact}</h3>
                <h3 class="email">Email: ${email}</h3>
                <h3>Fare:<span>&#8377;${data[flight_id].price*2}</span></h3>-->
            
            <center>
            <div class= "passanger1_details">
            
                <h3 class="pname">Name: ${name1}</h3>
                <h3 class="age">Age: ${age}</h3>
                <h3 class="gender">Gender: ${gender}</h3>
                
            </div>
            <div class= "passanger1_details">

                <h3 class="pname">Name: ${name2}</h3>
                <h3 class="age">Age: ${age2}</h3>
                <h3 class="gender">Gender: ${gender2}</h3>
            </div>
            <div class="contact_details">
            <h3 class="contact" style="margin-right:20px;">Contact No: ${contact}</h3>
            <h3 class="email">Email: ${email}</h3>
            </div>
            <h3>Total Fare: <span>&#8377;${data[flight_id].price*2}</span></h3>
            <a href="page1.html" class="home_link" style="margin-top:2% ;">Home</a>
            </center>
            </div>

    `
    document.querySelector("#flight_details").innerHTML = content;
}

// function to display the value of one passenger
function display_value(data)
{   
    departure=new Date(data[flight_id].departTime);
    arrival=new Date(data[flight_id].ArrivalTime);
 content += 
    `<center>
    <h1>${data[flight_id].flightNum}</h1>
    <div class=toandfro>
            <h3>${data[flight_id].origin}  </h3>
            <img src="images/logo-ticket.png" width=13%>
            <h3>  ${data[flight_id].destination}</h3>
    </div>
    <div class="time">
        <h3>${departure.toUTCString()}</h3>
        <h3>${arrival.toUTCString()}</h3>
    </div>
    <h2>Passenger Details</h2>
    </center>
    
    <div class="details" >
    
        <div class="flight_details">
            <!--
            <h3 class="contact">Contact No: ${contact}</h3>
            <h3 class="email">Email: ${email}</h3>
            <h3>Fare:<span>&#8377;${data[flight_id].price*2}</span></h3>-->
        
        <center>
        <div class= "passanger1_details">
        
            <h3 class="pname">Name: ${name1}</h3>
            <h3 class="age">Age: ${age}</h3>
            <h3 class="gender">Gender: ${gender}</h3>
            
        </div>
        <div class="contact_details">
        <h3 class="contact" style="margin-right:20px;">Contact No: ${contact}</h3>
        <h3 class="email">Email: ${email}</h3>
        </div>
        <h3>Total Fare: <span>&#8377;${data[flight_id].price}</span></h3>
        <a href="page1.html" class="home_link" style="margin-top:2% ;">Home</a>
        </center>
        </div>


    `

    document.querySelector("#flight_details").innerHTML = content;

}
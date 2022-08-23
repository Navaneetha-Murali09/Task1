document.getElementById("book_button_id").addEventListener("click",function(){
    document.querySelector(".book_flights").style.display="flex";
 })
 document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".book_flights").style.display="none";
})

// call from json

function display_cards(flight_det){
    const number_of_flights = Object.keys(flight_det).length; //number of flights in the json
    //console.log(number_of_flights);
    let content = '';
    for(let count=0;count<number_of_flights;count++){
        let flight = flight_det[count];

        
        const departure = new Date(flight.departTime)
        const arrival = new Date(flight.ArrivalTime)
        
        content +=  `
        <div class="card" >
            <div class="card-body">
                <h6>Flight Number: ${flight_det[count]['flightNum']}</h6>

                <h6>From: ${flight_det[count]['origin']}</h6>

                <h6>To: ${flight_det[count]['destination']}</h6>

                <h6>Departure Time:</h6>
                <p class="departure-time">${departure.toUTCString()}</p>
                <h6>Arrival Time:</h6>
                <p class="arrival-time">${arrival.toUTCString()}</p>
                <h6>Fare: &#8377;${flight_det[count]['price']}</h6>
                <center>
                <button type="button" class="btn btn-primary" id="flight${flight_det[count]['id']}" onclick="location.href='page2.html'; get_flight_details(${flight_det[count]['id']});">Proceed</button>
                </center>
                </div>
        </div>

    `

    }
    document.querySelector("#card-collection").innerHTML = content;
}

fetch('flights.json')
.then(response => response.json())
.then(data => display_cards(data));

function get_flight_details(flightid){
    //console.log('here')
    //console.log(flightid);
    localStorage.setItem("flightid", flightid);
    
}

/*<div class="card-body">
                <h6>Flight Number: ${flight_det[count]['flightNum']}</h6>
                <p class="Flight-number">${flight_det[count]['flightNum']}</p>
                <h6>From</h6>
                <p class="From">${flight_det[count]['origin']}</p>
                <h6>To</h6>
                <p class="To">${flight_det[count]['destination']}</p>
                <h6>Departure Time</h6>
                <p class="departure-time">${departure.toUTCString()}</p>
                <h6>Arrival Time</h6>
                <p class="arrival-time">${arrival.toUTCString()}</p>
                <h6>Fare</h6>
                <p class="price">&#8377;${flight_det[count]['price']}</p>
                <center>
                <button type="button" class="btn btn-primary" id="flight${flight_det[count]['id']}" onclick="location.href='page2.html'; get_flight_details(${flight_det[count]['id']});">Proceed</button>
                </center>
                </div> */
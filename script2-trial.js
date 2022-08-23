function add_listener(){
        first_name.addEventListener('input', validate_first_name);
        last_name.addEventListener('input', validate_last_name);
        age.addEventListener('input',validate_age);
        mail.addEventListener('input',validate_mail);
        number.addEventListener('input',validate_number);
}

function main(){
    let fn=false;
        let ln=false;
        let ag=false;
        let gen=false;
        let em=false;
        let ph=false;
        let details='';
        //form details
        let count=0;


        passanger_details();
        add_listener();

        let first_name=document.getElementById('fname');
        let last_name=document.getElementById('lname');
        let age=document.getElementById('Age');
        let select=document.getElementById('gender');
        let val = select.options[select.selectedIndex].value;
        let mail=document.getElementById('mail');
        let number=document.getElementById('contact');

        const button=document.getElementById('button');

        var name_regex = /^[a-zA-Z]{1,30}$/;
        var number_regex= /^[0-9]{10}$/;
        var age_regex= /^0?1[89]|0?[2-9][0-9]$/
        var mail_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

}


        

        

        confirm_button();

        function validate_first_name(){
            console.log(first_name.value)
            if(name_regex.test(first_name.value)){
                validate(first_name);
                fn=true;
                confirm_button();
            }
            else{
                error(first_name);
                fn=false;
            }
        }

        function validate_last_name(){
            console.log(last_name.value)
            if(name_regex.test(last_name.value)){
                validate(last_name);
                ln=true;
                confirm_button();
            }
            else{
                error(last_name);
                ln=false;
            }
        }

        function validate_age(){
            console.log(age.value)
            if(age_regex.test(age.value)){
                validate(age);
                ag=true;
                confirm_button();
            }
            else{
                error(age);
                ag=false;
            }
        }


        function validate_mail(){
            console.log(mail.value)
            if(mail_regex.test(mail.value)){
                validate(mail);
                em=true;
                confirm_button();
            }
            else{
                error(mail);
                em=false;
            }
        }

        function validate_number(){
            console.log(number.value)
            if(number_regex.test(number.value)){
                validate(number);
                ph=true;
                confirm_button();
            }
            else{
                error(number);
                ph=false;
            }
        }

        function validate(val){
            val.style.borderColor = "green";
            
            //console.log(count);
        }

        function error(val){
            val.style.borderColor = "red";

            //console.log(count);
        }

        function confirm_button(){
            if(fn===false && ln===false && ag===false  && em===false && ph===false){

                button.disabled = true;
                button.style.background=  "#d5dbd9";
                button.style.color ="rgb(79, 108, 145)";
            }
        else if(fn===true && ln===true && ag===true  && em===true && ph===true){
                store_item(count);
                button.disabled = false;
                button.style.background=  "rgb(79, 108, 145)";
                button.style.color ="#d5dbd9";
                button.style.ponter="cursor";

            }

        }

        function store_item(count){
            localStorage.setItem("firstname", first_name.value);
            localStorage.setItem("lastname", last_name.value);
            localStorage.setItem("age", age.value);
            localStorage.setItem("gender", val);
            localStorage.setItem("email", mail.value);
            localStorage.setItem("contact", number.value);
        }



        function add_pass(){
            if (confirm("Save passanger Details")) {
                count+=1;
                store_item(count);
                passanger_details();
              } 
        }

        function  passanger_details(){
            details =  `
            <div class=form_display>
                <form id="form" action="page3.html" class="passanger_detains">
                    <div class="input_data">
                    <label for="fname" class="firstname">First Name</label>
                    <input type="text" id="fname">
                    </div>

                    <div class="input_data">
                        <label for="lname" class="lastname">Last Name</label>
                        <input type="text"  id="lname">
                    </div>

                    <div class="input_data">
                        <label for="Age" class="age">Age</label>
                        <input type="text" id="Age">
                    </div>

                    <div class="input_data">
                    <label class="gender">Gender</label>
                    <select id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    </div>

                    <div class="input_data">
                        
                        <label for="mail" class="email">Email</label>
                        <input type="email" id="mail">

                    </div>
                    <div class="input_data">
                        <label for="contact" class="phone">Phone Number</label>
                        <input type="text" id="contact">
                    
                    </div>



                    <div class="input_data">
                    <input type="submit" value="Confirm" id="button" >
                    </div>
                    <div class="input_data">
                        <input type="submit" value="Add Passanger" id="button" onclick=" add_pass()">
                    </div>
                </form>
            </div>
            `
            document.querySelector("#input_details").innerHTML = details;
        }






        /*

        function add_passenger(){
            
            //var main_div=document.getElementById("input_details");
            var form = document.createElement("FORM");
                form.setAttribute("id", "form");
                form.setAttribute("class", "passanger_detains");
                main_div.appendChild(form);
            
                var div1= document.createElement("DIV");
                div1.setAttribute("class", "input_data");
                document.getElementById("form").appendChild(div1);

                var label1 = document.createElement("label");
                label1.setAttribute("class", "firstname");
                label1.innerHTML = "First Name";
                document.getElementsByClassName("input_data").appendChild(label1);

                var inp1 = document.createElement("INPUT");
                inp1.setAttribute("type", "text");
                inp1.setAttribute("class", "firstname");
                document.getElementsByClassName("input_data").appendChild(inp1);

                var label2 = document.createElement("label");
                label2.setAttribute("class", "lastname");
                label2.innerHTML = "Last Name";
                document.getElementsByClassName("input_data").appendChild(label2);

                var inp2 = document.createElement("INPUT");
                inp2.setAttribute("type", "text");
                inp2.setAttribute("class", "firstname");
                document.getElementsByClassName("input_data").appendChild(inp2);
                document.getElementById("input_details").appendChild(form);
        }
        */
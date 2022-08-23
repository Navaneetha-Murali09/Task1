let fn=false;
let ln=false;
let ag=false;
let gen=false;
let em=false;
let ph=false;


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

first_name.addEventListener('input', validate_first_name);
last_name.addEventListener('input', validate_last_name);
age.addEventListener('input',validate_age);
mail.addEventListener('input',validate_mail);
number.addEventListener('input',validate_number);

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

function validate_last_name()
{
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

function validate_age()
{
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


function validate_mail()
{
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
                button.style.color ="rgb(255, 102, 0)";
            }
        else if(fn===true && ln===true && ag===true  && em===true && ph===true){
                store_item1();
                button.disabled = false;
                button.style.background=  "rgb(255, 102, 0)";
                button.style.color ="#d5dbd9";
                button.style.ponter="cursor";
            }
}

function store_item1(){
            localStorage.setItem("firstname1", first_name.value);
            localStorage.setItem("lastname1", last_name.value);
            localStorage.setItem("age1", age.value);
            localStorage.setItem("gender1", val);
            localStorage.setItem("email1", mail.value);
            localStorage.setItem("contact1", number.value);
            localStorage.setItem("flag",0);
}


let first_name2=document.getElementById('fname2');
let last_name2=document.getElementById('lname2');
let age2=document.getElementById('Age2');
select=document.getElementById('gender2');
let val2 = select.options[select.selectedIndex].value;

function add_pass()
{
    let pass=document.getElementById("add_passanger");
    pass.style="display:true";
    console.log(first_name2.value,last_name2.value, age2.value,val2);
}
function store_item2()
{
    
    localStorage.setItem("firstname2", first_name2.value);
    localStorage.setItem("lastname2", last_name2.value);
    localStorage.setItem("age2", age2.value);
    localStorage.setItem("gender2", val2);
    localStorage.setItem("flag",1);
}
function submit_button_pressed()
{
    window.location.href="page3.html";
}
    
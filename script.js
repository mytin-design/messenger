//objective

//the main function of the app is to send similar message to multiple clients simultaneously;


//create a database of several phone numbers and names
//a function should lood though available numbers, 
//phone numbers are the unique id's
//if no, then name
//so send message to number and include the name of the recepient in the message;

//e.g Message to [083910292]: Hi, [name], defaultMessage;

//an object/instance for each student

class Youth {
    constructor(phoneNumber, Name) {
        this.phoneNumber = phoneNumber;
        this.Name = Name;
    }

    //low level methods - abstraction
    displayPhoneNumber() {
        return  this.phoneNumber;
    }

    displayName() {
        return  this.Name;
    }

    //higher level

    displayData() {
        this.displayPhoneNumber();
        this.displayName();
    }

    //send message

    sendMessage() {
        //console.log(`Message to: ${this.phoneNumber}: Hi ${this.Name}, Our Year's Theme is: Deny Yourself, Carry your cross, and Follow me- Mark 8:48`);
        return `Message to: ${this.phoneNumber}: <br> Hi, ${this.Name}, Our Year's Theme is: Deny Yourself, Carry your cross, and Follow me- Mark 8:48`
    }
}


/* 
let displaybox = document.querySelector(".displayBox");

let phone = document.getElementById("phoneNumber");
let yname = document.getElementById("name");

//let youth1 = new Youth("0719444041", "Denis");

let youth1 = new Youth(phone.value, yname.value);
//inheritance

function sendMessage() {
    displaybox.innerHTML = youth1.sendMessage();
}

*/


//Objective 2 - Making it automatic
//store numbers and names in an array;
//loop through the names and phone numbers and pass them to the instance;
//when sendMessage function is called, 
//a new youth's information should be passed, by creating a new instance for each 

let ynames = ["Denis", "John", "Ken"];

let ynums = ["0932883", "9323992", "32388993"];

let yinstances = ["y1", "y2", "y3"];
function sendMessage() {
    for(i = 0; i < yinstances.length;i++) {
        //yinstances[i];
        for(x = 0; x < ynames.length;x++) {
            //ynames[x];
            for(u = 0; u < ynums.length;u++) {
                //ynums[u];
            }
        }

        //yinstances[i] = new Youth(ynames[x], ynums[u]);
    }

        yinstances[i] = new Youth(ynames[x], ynums[u]);

        //displaybox.innerHTML = yinstances[i];
        return yinstances[i];
        
}

console.log(sendMessage());


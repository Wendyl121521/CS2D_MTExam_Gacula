let age = "28";
 if (age <= 12) {
    if (age < 5){
        console.log("You're a Toddler.");
    }   else {
        console.log("You're a Child.");
    }
 }  else if (age <= 19){
        console.log("You're a Teenager.");
 }  else if (age <= 35){
        console.log("You're a Young Adult.");
 }  else{
        if (age <= 60){
            console.log("You're a Middle-Aged.");
        }   else {
                console.log("You're a Senior.");
        }
 }
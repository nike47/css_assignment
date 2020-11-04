function yesorno(that){
    if (that.value == "yes"){
        document.getElementById("optional").style.display = "block";
    }
    else{
        document.getElementById("optional").style.display = "none";
    }
}


function checkage(that){
    if (that.value < 18){
        document.getElementById("age").style.borderColor = "red";}
    else{
        document.getElementById("age").style.borderColor = "#eee";
    }
    
}


function click2(){
    alert("Thank you for Signing in");
}
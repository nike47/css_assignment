function yesorno(that){
    if (that.value == "yes"){
        document.getElementById("optional").style.display = "block";
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
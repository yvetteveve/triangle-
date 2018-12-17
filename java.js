
function outputname(){
    var numberone=parseInt(document.getElementById('one').value);
    var numbertwo=parseInt(document.getElementById('two').value);
    var numberthree=parseInt(document.getElementById('three').value);
    var array=[numberone,numbertwo,numberthree];
    var text;

    if(numberone <= 0|| numbertwo <= 0 || numberthree <=0 ){
       text="Undefined"
    }
    else if (
        (numberone + numbertwo <= numberthree &&
         numbertwo + numberone <= numberthree)||
        (numberone + numberthree <= numbertwo &&
         numberthree + numberone <= numbertwo)||
        (numbertwo + numberthree <= numberone && numberthree + numbertwo <= numberone)
         ) {
        text = "Not a Triangle.";
      }
    
    else if(numberone === numbertwo && 
         numberone===numberthree &&
         numbertwo === numberthree){
         text = "Equilaterial Triangle.";
    }
     
    
    else if(numberone===numbertwo || 
         numberone===numberthree || 
         numbertwo===numberthree) {
         text="Isosceles Triangle.";
    }
  
    else if(numberone!==numbertwo &&
         numberone!==numberthree &&
         numbertwo!==numberthree){
         text="Scalene Triangle."
    }
   
        else{
        text = "Error.";
    }
        
        document.getElementById('demo').innerHTML= text;
        document.getElementById('demo').innerHTML+=array;

}

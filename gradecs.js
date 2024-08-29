
function calculate(){

    var a= parseInt(document.getElementById("bookone").value);
    var b= parseInt(document.getElementById("booktwo").value);
    var c= parseInt(document.getElementById("bookthree").value);
    var d= parseInt(document.getElementById("bookfour").value);
    var e= parseInt(document.getElementById("bookfive").value);


    if( a> 100 || b > 100 ||  c> 100 || d> 100 || e>100){

      alert("Please put below 100");
    }
    else{
         var obtain = a + b + c + d + e;
         document.getElementById("obtained").innerHTML= obtain;

         var percentage = obtain/500 * 100;
         document.getElementById("per").innerHTML= percentage;

        if( a > 40 && b > 40 &&  c > 40 && d > 40 &&  e > 40){
            document.getElementById("remarks").innerHTML="PASS";

        }else{
            document.getElementById("remarks").innerHTML="Fail";
        }
        if(percentage >= 80){
            document.getElementById("grade").innerHTML="A";

        }else if(percentage >= 70){
            document.getElementById("grade").innerHTML="B";
        }
        else if(percentage >= 60){
            document.getElementById("grade").innerHTML="C";
        }
        else if(percentage >= 50){
            document.getElementById("grade").innerHTML="D";
        }
        else{
            document.getElementById("grade").innerHTML="F";
        }
         return false;
    }



}
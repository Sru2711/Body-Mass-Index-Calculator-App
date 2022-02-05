function calculate()
{
    var w=parseFloat(document.getElementById("weight").value);
    var h=parseFloat(document.getElementById("height").value);
    var hm=h/100;
    var bmi= (w/(hm*hm)).toFixed(2);
    document.getElementById('text').innerHTML=bmi;
    if (bmi < 18.5)
    {
        document.getElementById("comments").innerHTML="Underweight";
        document.getElementById("division1").className="spinner-grow text-primary primary";
        
        
    }
    else if(bmi >= 18.5 && bmi <= 24.9)
    {
        document.getElementById("comments").innerHTML="Normal";
        document.getElementById("division1").className="spinner-grow text-light light";
        
        
    }
    else if(bmi >= 25 && bmi <= 29.9)
    {
        document.getElementById("comments").innerHTML="Warning " ;
        document.getElementById("division1").className="spinner-grow text-info info";
        
    }
    else if(bmi >=30 && bmi <= 34.9)
    {
        document.getElementById("comments").innerHTML="Overweight" ;
        document.getElementById("division1").className="spinner-grow text-success success";
        
        
    }
    else if(bmi >= 35)
    {
        document.getElementById("comments").innerHTML="Obese" ;
        document.getElementById("division1").className="spinner-grow text-danger danger";
        
    }

}
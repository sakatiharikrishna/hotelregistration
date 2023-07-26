function RegisterClick(){
    document.getElementById("summary").style.display="block";
    document.querySelector("header").style.display="none";
    document.querySelector("section").style.display="none";

    document.getElementById("IblName").innerHTML=document.getElementById("CustomerName").value;
    document.getElementById("IblDate").innerHTML=document.getElementById("Date").value;
    document.getElementById("IblDays").innerHTML=document.getElementById("TotalDays").value;
    document.getElementById("IblPersons").innerHTML=document.getElementById("TotalPersons").value;
    document.getElementById("IblAdvance").innerHTML=document.getElementById("Advance").value;

    var RoomName="";
    var RoomCost=0;

    var AmenitiesName=""
    var AmenitiesCost=0;
    
    var Balance=0;
    var total=0;

    var optDelux=document.getElementById("optDelux");
    var optSuite=document.getElementById("optSuite");

    if(optDelux.checked){
       RoomName=optDelux.value
       RoomCost=2500;
    }
    if(optSuite.checked){
      RoomName=optSuite.value;
      RoomCost=4000;
    } 
    var optAc=document.getElementById("optAc");
    var optLocker=document.getElementById("optLocker");

    if(optAc.checked){
      AmenitiesName+=optAc.value+"<br>"
      AmenitiesCost=1000;
      RoomCost+=AmenitiesCost;
    }
    if(optLocker.checked){
      AmenitiesName+=optLocker.value+"<br>"
      AmenitiesCost=300;
      RoomCost+=AmenitiesCost
    }
    var Advance=document.getElementById("Advance").value;
    if(Advance==""){
      alert("Enter Advance");
    }
    
    total=RoomCost;
    var Advance=document.getElementById("Advance").value;
    var TotalDays=document.getElementById("TotalDays").value;
    var totalCost=total*TotalDays

    Balance=totalCost-Advance;
    document.getElementById("IblRoom").innerHTML=RoomName;
    document.getElementById("IblAmentities").innerHTML=AmenitiesName;
    document.getElementById("IblBalance").innerHTML=`<b>&#8377;${Balance}</b>`;
  
    var person=document.getElementById("TotalPersons").value;
    var value=person-2;
    if(value>=0){
      document.getElementById("IblBalance").innerHTML=`<b>&#8377;${Balance+value*1000}</b>`;
    }
   }
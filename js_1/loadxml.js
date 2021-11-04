function loadXMLDoc(){
var xmlhttp = new XMLHttpRequest();
//Get user choice
var choice = document.getElementById("service_sel");
var val = choice.value;

//Select xml file for chosen service
if(val == "0"){
  return; //No action for default value
}
else if(val == "1"){
  xmlhttp.open("GET", "xml/preventive.xml", true);}
else if(val == "2"){
  xmlhttp.open("GET", "xml/treatment.xml", true);}
else if (val == "3"){
  xmlhttp.open("GET", "xml/remsurimp.xml", true);}
else if (val == "4"){
  xmlhttp.open("GET", "xml/fixedp.xml", true);}
else if (val == "5"){
  xmlhttp.open("GET", "xml/mobilep.xml", true);}
else if (val == "6"){
  xmlhttp.open("GET", "xml/periodontics.xml", true);}

xmlhttp.send();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
  }
};
}
function myFunction(xml) {
var i;
var xmlDoc = xml.responseXML;
var table='<table><thead><tr><th width="60%"><strong>SERVICE</strong></th><th width="20%"><strong>PRICE</strong></th><th width="20%"><strong>DISCOUNT -10%</strong></th></tr></thead><tbody>';
var x = xmlDoc.getElementsByTagName("ITEM");
for (i = 0; i <x.length; i++) {
  table += "<tr><td>" +
  x[i].getElementsByTagName("SERVICE")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue +
  "</td></tr>";
}
table += "</tbody></table>";
document.getElementById("service_price").innerHTML = table;
}

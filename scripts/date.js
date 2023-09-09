const date = new Date(); //get date
const format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; //formatting the date format
document.getElementById("ddate").innerHTML = date.toLocaleDateString('us-EN', format); //call in to the id sub in html
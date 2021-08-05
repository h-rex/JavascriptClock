// javascript 1st project : Date and Time
let a;
let time;
let date;
setInterval(() => {
    a = new Date();
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    date = a.toLocaleDateString();
    document.getElementById("time").innerHTML = time + " & " + date;
}, 1000); 

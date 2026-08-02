// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString);
console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 2)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2026, 0, 2, 4, 1)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2026-08-02")
console.log(myCreatedDate2.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());
console.log((Date.now()/1000).toFixed(0));
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());

newDate.toLocaleString('default' , {
    weekday : 'long',
});
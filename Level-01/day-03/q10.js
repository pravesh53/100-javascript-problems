//Write a programt to read seconds and convert them into hours, minutes & seconds.

let Seconds = 3665;

let hours = Math.floor(Seconds / 3600);   //-----3665/3600--->1.018h
console.log(hours);
let remainingSeconds = Seconds % 3600;     //------3665/3600--->65 remainder

let minutes = Math.floor(remainingSeconds / 60);    //-----65/%60--->1m
let seconds = remainingSeconds % 60;               //-----65%60---->5

console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
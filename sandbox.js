
/*
//for loop
for(let i= 0; i< 5; i++){
    console.log('in loop:', i);
}
console.log('loop finished');

const names= ['shaun', 'mario', 'luigi']; //original

for( let i=0; i<names.length; i++){
    //console.log(i);
   //console.log(names[i]);
   let html= `<div>${names[i]}</div>`;
   console.log(html);
}



//while loop
let i = 0;
while( i < 5){
    console.log('loop:', i);
    i++;
    
}




const names= ['shaun', 'mario', 'luigi'];//repeat 1
let i = 0;
while( i< names.length){
    console.log(names[i]);
    i++;
}

//do while loop (ensures the code runs atleast once even if the condition is false)

let i = 5;
do{
    console.log('val of i is:', i);
    i++;
} while (i < 5);



//conditional statements if...statement
const age = 22;
if(age > 20){
    console.log('You,re over 20 years old');
}
const ninjas=['shaun', 'ryu', 'chun-li', 'yoshi'];
if(ninjas.length > 3){
    console.log("that's a lot of ninjas");// used double quote because our sentence already has a single quote in that's
}
*/

//if...else statement
const password= 'p@assword1234';
if(password.length >= 12){
    console.log('that password is strong enough!!')
}else if (password.length >= 8){
    console.log('that password is long enough!');//else if statemen
 }   else{
        console.log('password is not long enough')
    }
//how to satisfy a compination of different condions all at once


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
//logical operators- OR || and AND &&

const password= 'p@ssword1234';
if(password.length >= 12 && password.includes('@')){
    console.log('password is mighty strong!!');
}else if (password.length >= 8 || password.includes('@')&& password.length > 5){
    console.log('password is strong enough!!');//else if statemen
 }   else{
        console.log('password is not strong enough');
    }

//logical NOT(!)
let user = false;

if(!user){
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

//break and continue
//break
const score = [50,25,0,30,100,20,10];

for(let i = 0; i < score.length; i++){
    if(score[i]===0){
        continue; //continue skips 0 and continues listing
    }
    console.log('your score:', score[i]);
    if(score[i]===100){
        console.log('congrats, you got the top score!');
        break;//breaks the scores after 100 hence do not continue counting after 100
    }
}
 */
// Switch statement
const grade= 'A';
switch(grade){
    case 'A':
        console.log('you got an A!');
    case 'B':
        console.log('you got an B!');
    case 'C':
        console.log('you got an C!');
    case 'D':
        console.log('you got an D!');
    case 'E':
        console.log('you got an E!'); 
    default:
        console.log('not a valid grade');   

}
    
        



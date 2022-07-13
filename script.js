
let z=1;
for(z=1; z<= 10; z++){
    console.log(z)
};
//

for(d=10; d>=1; d--){
    console.log(d)
}
//

let i = 1; 
while(i>=10){
    console.log(i);
    i++
}
//

let result = '';
let a = 0;

do {
  a = a + 1;
  result = result + a;
} while (a < 10);

console.log(result);
/////////


let arrayOfNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
for(let number of arrayOfNumbers){
    console.log(number);
}
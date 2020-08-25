const sentence = 'hello there from lighthouse labs' ;
let time = 0;
for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, time += 50) //<= 1s delay to make it noticeable. Can dial it down later.


}
console.log("??")
setTimeout(() => {
  console.log("");
}, time) //<= 1s delay to make it noticeable. Can dial it down later.

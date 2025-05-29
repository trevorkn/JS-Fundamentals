const x = parseInt(process.argv[2]);
let message = 'C is fun'
if(isNaN(x)){
console.log('Missing number of occurrences');
}
else{
for (let i = 0; i < x; i++){
console.log(message);
}
}

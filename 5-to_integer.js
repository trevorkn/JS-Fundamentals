let myNumb = process.argv[2];

if(isNaN(Number(myNumb))){
console.log('Not a number');
}
else{
console.log('My number:', myNumb);
}

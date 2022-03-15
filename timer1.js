const args = process.argv.slice(2);

  for(const seconds of args){ //for loop entire args array
    if (seconds > 0){         // eliminate for negative time inputs in our function
      setTimeout(() => {
        process.stdout.write('\x07'); //input adds the tick sound
      }, seconds * 1000);
    } 
};
console.log(args)


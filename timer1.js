// take command line inputs process.argv
// loop through them starting at 2 to avoid user info
for (let x = 2; x < process.argv.length; x++) {
  // edge cases to take out non numbers and negative numbers
  if (!isNaN(process.argv[x])  && process.argv[x] >= 0) {
  // set Timeout function call
    setTimeout (() => {
      // this line causes a beep in terminal
      process.stdout.write('\x07'); 
      // input command line timers 
    }, process.argv[x]); 
  }
};


   
//example input
// node timer1.js 10 3 5 15 9 
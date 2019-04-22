process.argv.shift();
process.argv.shift();
const input = process.argv[0];

function standardizeInput(input) {
  if(input[input.length - 1] === "s") {
    console.log(input.slice(0, -1))
    return parseInt(input.slice(0, -1));
  } else if(input[input.length - 1] === "n") {
    return parseInt(input.slice(0, -3))
  }
}

let duration = standardizeInput(input);

while(duration > 0) {
  setInterval(function(duration) {
    console.log(duration)
  }, 1000);
}

process.argv.shift();
process.argv.shift();
const input = process.argv[0];

function standardizeInput(input) {
  if(input[input.length - 1] === "s") {
    return parseInt(input.slice(-1));
  } else if(input[input.length - 1] === "n") {
    return parseInt(input.slice(0, -3))
  }
}

const duration = standardizeInput(input);

while(duration > 0) {
  setInterval(function() {
    console.log(duration);
    duration--;
  }, 1000)
}

process.exit()

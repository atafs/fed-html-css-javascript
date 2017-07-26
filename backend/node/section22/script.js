/* ASSIGNMENT: Print to Terminal ******************************************** */
//function: print a number of times a string
function echo(str, num) {
  for (var i = 0; i < num; i++) {
    process.stdout.write(i + ": " + str + "\n");
  }
}

//print with echo
echo("Echo!!!", 10)
echo("Yes!!!", 3)

//print to terminal
process.stdout.write("sum: 2 + 4 = " + (2+4) + "\n");

/* ASSIGNMENT: Average grade ************************************************ */
//function
function average(scores) {
    //add all scores together
    var total = 0;
    scores.forEach(function(score) {
      total += score;
    });

    //divide by total number of scores
    var avg = total / (scores.length);

    //round average
    return Math.round(avg);
}

//variables and logs
var scores1 = [90, 98, 89, 100, 100, 86, 94];
console.log('Average Scores 1: ' + average(scores1)); // should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log('Average Scores 2: ' + average(scores2) + "\n\n"); // should return 68

/* ASSIGNMENT: Use NPM to get a package  ************************************ */
var cat = require("cat-me");
var joke = require("knock-knock-jokes");

console.log(cat() + "\n\n");
console.log(joke() + "\n\n");

/* ASSIGNMENT: Standard Input using command line **************************** */
const commandLineArgs = require('command-line-args')

const options = commandLineArgs([], { partial: true })
console.log("[" + options._unknown + "]");

if (options._unknown) {
  console.log("Position 2 = " + options._unknown[2]);
}

/* ASSIGNMENT: Standard Input using readline ******************************** */
var readline = require('readline');
var strsplit = require('strsplit');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\n\nWrite a message:");
rl.on('line', (line) => {
  console.log(`\nReceived: ${line}`);
  console.log(strsplit(line, /\s+/));

  rl.close();
});

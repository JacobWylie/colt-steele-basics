const cats = require('cat-me');

for (i = 0; i < 10; i++) {
	console.log(cats());
}




const ora = require('ora');
const spinner = ora('Loading unicorns').start();
 
setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
}, 1000);




const boxen = require('boxen');
console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));




var figlet = require('figlet');
 
figlet("This is not good!", function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});




var knockknock = require('knock-knock-jokes')
 
console.log(knockknock()) // returns a knock knock joke 




























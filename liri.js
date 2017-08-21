// Require packages
console.log("Loaded liri")
var fs = require('fs')
var inquirer = require('inquirer');
var Twitter = require('twitter');


//  Variable
var client = new Twitter({
    consumer_key: 'squkevbrnU5h92cziqUbETnOO',
    consumer_secret: 'egpuEQG8oXmYsKhxaCXDxsz0i1mt7XNzWySHgyAqsOBu5p55pv',
    access_token_key: '873249017735651328-pO04cm8Mgv5TQMDxIvhjSXVvUwck824',
    access_token_secret: 'txfn4IlBwPqMmFuoFQLQCFYCQ8zGOsQ3uvBCAhXvXKHfP'
});

// Twitter Function
function mytweets() {
// Code from NPM



var params = { screen_name: 'Toolwatcher' };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
          for(var i = 0; i < 5; i++) {

            if (tweets[i] == null || tweets[i] == undefined) {
                continue;
            }
        console.log ("Tweets");
        console.log(tweets[i]);
        console.log(tweets[i].text);

        }


      }
    console.log(error);
    });
}

mytweets();
//inquirer.prompt([{
//}]).then(function (answers) {
    // Use user feedback for... whatever!!
//});


var exec = require('cordova/exec');

// module.exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'MathCalculator', 'coolMethod', [arg0]);
// };

// Add your own custom methods to plugin which java and ios will use below , If keeping function above or if you have multiple functions you need to keep the module. in front of 
//exports below  and in front of exports above otherwise if you only have one function you take away the module. in front of exports.//

module.exports.add = function (arg0,success,error)
{
    exec(success,error,'MathCalculator','add',[arg0]);
}

module.exports.subtract = function (arg0,success,error)
{
    exec(success,error,'MathCalculator','subtract',[arg0]);
}
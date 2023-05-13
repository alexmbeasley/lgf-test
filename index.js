// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./lgf-test
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//map, filter, reduce, each
var maleCount = function(array){
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    })
    return males.length;
};

var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current){ //accumulator = 0 | current {0}
        if(current.gender === 'female'){
            accumulator += 1; 
        }
        return accumulator
    }, 0);//array, func seed

    return females;
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){
        //determine if current customer is older than accumulator
        if(current.age > accumulator.age){
            //return current if older
            return current;
        } else {
            //return accumulator else
            return accumulator; 
        }
      
    })
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator, current){
        //determine if current customer is younger than accumulator
        if(current.age < accumulator.age){
            return current;
        } else {
            return accumulator; 
        }
    
    })
    return youngest.name;
};

var averageBalance = function(array){
    let totalBal = _.reduce(array, function(accumulator, current){
        return accumulator + parseFloat(current.balance.replace(/[$,]/g, ""))
    }, 0);
    return totalBal / array.length;
};

var firstLetterCount = function(array, letter){
    let counter = 0;
    
    _.each(array, function(customer){
        if(customer.name.charAt(0).toLowerCase() === letter.toLowerCase()){
            counter ++;
        }
    });
    return counter;
    
};

var friendFirstLetterCount = function(array, customer, letter){
    let count = 0;
    _.each(array, function(customerName) {
        if(customerName.name === customer) {
            _.each(customerName.friends, function(friend){
                if(friend.name.charAt(0).toLowerCase() === letter.toLowerCase()){
                    count ++;
                }
            });
        }
    });
    return count;
};

var friendsCount = function(array, name){
    let friendsArr = [];
    _.each(array, function(customers){
        _.each(customers.friends, function(friend){
            if (friend.name === name){
                friendsArr.push(customers.name);
            }
        });
    });
    return friendsArr;

};

var topThreeTags;

var genderCount = function(array){
    let gender = _.reduce(array, function(accumulator, current) {
        if (accumulator[current.gender]){
            accumulator[current.gender]++;
        } else {
            accumulator[current.gender] = 1;
        }
        return accumulator;
    }, {})
    return gender;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
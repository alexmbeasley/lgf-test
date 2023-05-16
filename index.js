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
    //use the filter function to store all the customers with male gender into a created male array 
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    })
    //return the length of that array
    return males.length;
};

var femaleCount = function(array){
    //use reduce to create an accumulator value to store a count
    let females = _.reduce(array, function(accumulator, current){ //accumulator = 0 | current {0}
        //if the gender is female add 1 to the count
        if(current.gender === 'female'){
            accumulator += 1; 
        }
        //return the accumlated value
        return accumulator
    }, 0);//array, func seed
    //return the created females seed
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
    //use the reduce function and store the accumulator value as the sum of the balances
    let totalBal = _.reduce(array, function(accumulator, current){
        //convert the balances to numbers by removing the $ and , 
        return accumulator + parseFloat(current.balance.replace(/[$,]/g, ""))
    }, 0);
    //return the average
    return totalBal / array.length;
};

var firstLetterCount = function(array, letter){
    let counter = 0;
    //use the each function to loop thorugh the array and count any instance of the given letter
    _.each(array, function(customer){
        //convert both to lower case
        if(customer.name.charAt(0).toLowerCase() === letter.toLowerCase()){
            counter ++;
        }
    });
    return counter;
    
};

var friendFirstLetterCount = function(array, customer, letter){
    let count = 0;
    //use each to loop through the customers array and find the frineds list
    _.each(array, function(customerName) {
        //if the name matches the given name move foward
        if(customerName.name === customer) {
            //use each to loop through the friends list
            _.each(customerName.friends, function(friend){
                //compare if the names are in the list and return the value
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
    //same concept as count but push the names into a array
    _.each(array, function(customers){
        _.each(customers.friends, function(friend){
            if (friend.name === name){
                friendsArr.push(customers.name);
            }
        });
    });
    return friendsArr;

};


    var topThreeTags = function(arrCustomers){

        var topTags = [];
        
        //loop through the customers array to find each custoemr
        _.each(arrCustomers, function(customer){
            //loop through again to get tags
            _.each(customer.tags, function(tag){
        
              let match = false;
        
              for(let i = 0 ; i < topTags.length; i++){
                //if top tag alreay exist increat the count
        
                if( topTags[i].tag == tag){
                  match = true;
                  topTags[i].count++;
                  
                }
        
              }        
              // if match is false, create a key/value with the tag and the count 
              if (!match) topTags.push({"tag":tag,"count":1});
        
            });
        
          });
          //sort the tags object from largest to smallest
      topTags.sort((a, b) => b.count - a.count);
      //slice everything but the top three
      let topThreeObject = topTags.slice(0, 3);
      // using map create an array with just the tag value
      let topThree = _.map(topThreeObject, function(item){
        return item.tag;
      });
      //return the top three
      return topThree;
    }
    

var genderCount = function(array){
    // use the reduce function with an empty object as the seed
    let gender = _.reduce(array, function(accumulator, current) {
        //if you are located at the current gender in the customers array
        if (accumulator[current.gender]){
            //increase the count in the object by one
            accumulator[current.gender]++;
        } else {
            //set it eqaul to one
            accumulator[current.gender] = 1;
        }
        //return the accumulator count
        return accumulator;
    }, {})
    //return the gender object
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
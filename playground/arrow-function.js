// expression syntax [Parentheses can be removed if only one arg.]
var square = (x) => x*x;
/*
// STATEMENT SYNTAX
var square = (x) => {
  var result = x*x;
  return result;
};
*/
console.log(square(9));


//---------------------------------------------//

var user = {
  name: 'Ernest',
  sayHi: () => {
    console.log(arguments)
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHiAlt(1, 2, 3);

var person = {
  firstName: 'John',
  lastName: 'Hwang',
  hobby: 'Gaming'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'Unemployed Student';
console.log("The person's current job is: " + person.job);

person.previousJob = 'Logistics Associate';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);

var myCar = {
  make: 'Scion',
  model: 'TC',
  year: '2009'
};
console.log(myCar);

myCar['owner'] = fullName;
console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model']);

myCar['color'] = 'Navy';
console.log(myCar);

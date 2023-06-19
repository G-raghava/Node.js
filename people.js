const people = ['raghava', 'ryu', 'chun-li', 'shreya'];
const ages = [20, 25, 30, 35];

console.log(people);

//module.exports = 'hello';

//module.exports = people;  //this will export single thing

module.exports = {
   people, ages
};
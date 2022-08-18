// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver =>
    driver.slice(0, string.length).toLowerCase() === string.toLowerCase());
}

function matchName(drivers, property) {
    return drivers.filter(driver => driver.name.toLowerCase() === property.toLowerCase())
}

console.log(matchName(drivers, 'Bobby'));

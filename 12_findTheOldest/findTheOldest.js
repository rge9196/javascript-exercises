const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  let oldestPerson = "";
  let oldestAge = 0;

  for (const person of people) {
    let name = person.name;
    let birth = person.yearOfBirth;
    let death = "yearOfDeath" in person ? person.yearOfDeath : currentYear;
    let age = death - birth;

    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = name;
    }
  }

  return { name: oldestPerson, age: oldestAge };
};

// Do not edit below this line
module.exports = findTheOldest;

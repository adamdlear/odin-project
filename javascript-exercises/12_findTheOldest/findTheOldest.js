const findTheOldest = function(people) {
    let oldestPerson;
    let highestAge = 0;
    let age;

    for (let person of people) {
        if (person.yearOfDeath !== undefined) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = 2024 - person.yearOfBirth;
        }

        if (age > highestAge) {
            highestAge = age;
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

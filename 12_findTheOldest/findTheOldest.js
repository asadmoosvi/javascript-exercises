const findTheOldest = function (people) {
    people.sort((a, b) => {
        let ageA, ageB;
        if (!a.yearOfDeath) {
            ageA = new Date().getFullYear() - a.yearOfBirth;
        } else {
            ageA = a.yearOfDeath - a.yearOfBirth;
        }
        if (!b.yearOfDeath) {
            ageB = new Date().getFullYear() - b.yearOfBirth;
        } else {
            ageB = b.yearOfDeath - b.yearOfBirth;
        }
        return ageA > ageB ? -1 : 1;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;

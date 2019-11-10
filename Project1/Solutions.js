// Solution of Q1

console.log("Q1 :")

check = function (array,Num){
    for(let i = 0; i<array.length; i++){
        if (array[i] === Num){
            return true;
        }
        
    }
    return false;
}
console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))


// Solution of Q2

console.log("  ")
console.log("Q2 :")

function convertToSeconds(hours, minutes){
    hours = hours * 60 * 60;
    minutes = minutes * 60;

    let result = hours + minutes;
    console.log(result)

}
convertToSeconds(1, 3)
convertToSeconds(2, 0)
convertToSeconds(0, 0)

// Solution of Q3

console.log("  ")
console.log("Q3 :")

var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}

console.log(aquarium.capacityInGallons)

aquarium.numberOfRocks += 2;

console.log(aquarium.fish[2])

console.log(aquarium.fish[1].size)

aquarium.fish[0].size = '4 inches'
console.log(aquarium.fish[0].size)


addFish = {
                type: 'starfish',
                size: '5 inch',
                color: 'blue'
}
aquarium.fish.push(addFish)
console.log(aquarium.fish[3])


// Solution of Q4
console.log("  ")
console.log("Q4 :")

json = (require('./data')); 

var data = JSON.parse(json);

let logData = function() {
    console.log(data)
}
logData()

console.log("=============================")

let logNames = function() {
    for(i = 0 ; i < data.people.length ; i++){
        console.log(data.people[i].name)

    }
};
logNames()

console.log("=============================")

let logNameEyes = function() {
    for(i = 0 ; i < data.people.length ; i++){
        console.log(data.people[i].name + "  " + data.people[i].eye_color)

    }

};
logNameEyes()

console.log("=============================")

let logByMass = function() {
    for(i = 0 ; i < data.people.length ; i++){
        if(data.people[i].mass > 75) 
        {
            console.log(data.people[i].name)
        }

    }
};

logByMass()

console.log("=============================")

//**Bonus Questions:
console.log("Bonus Questions:")

let getRandomNum = function(num){
    return Math.floor(Math.random() * Math.floor(num));

}
console.log(getRandomNum(10))
console.log(getRandomNum(6))

console.log("=============================")

let isLeap = function(year){
    if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0){
        return true 
    }
    return false
}
console.log(isLeap(2020))
console.log(isLeap(1800))
console.log(isLeap(2000))
console.log(isLeap(2019))

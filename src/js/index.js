const user1 = {
        name:"Иван",
        age: 16
    }
const user2 = {
        name:"Пётр",
        age: 27
    }

function getAge(){
    return this.age;
}


user1.getAge = getAge;

console.log(user1.getAge())

/// Метод call


function User(name, age, gender){
    this.name = name,
    this.age = age,
    this.gender = gender
}

User.prototype.getInfo = function(text){
    return `${this.name}- ${this.age}- ${this.gender} - ${text}`
}

const user3 = new User('Алексей', 30, 'man');

const getInfo = user3.getInfo;

console.log(getInfo)

const user4 = {
    name: "Гоша",
    age: 25,
    gender: 'man'
}
getInfo.call(user4, 'Привет мир');

console.log(user4)
// let cat = {type: 'cat', sound: 'mew'}
// let dog = {type: 'dog', sound: 'woof'}

// const say = function (message) {
//     console.log(message);
//     console.log(this.type, this.sound);
// }

// say.apply(cat, ['what cat say'])
// say.apply(dog, ['what dog say'])

let bird = {type: 'bird', sound: 'pickup'}
let cow = {type: 'cow', sound: 'hammbaa'}

const speak = function (message) {
    console.log(message);
    console.log(this.type, this.sound);
}

speak.call(bird, 'what bird say')
speak.call(cow, 'what cow say')

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);

console.log(fullName())
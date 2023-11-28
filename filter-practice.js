const characters = [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: 150,
      mass: 49,
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: 188,
      mass: 84,
      eye_color: "blue",
      gender: "male",
    },
  ];

 const mass = characters.filter(character =>character.mass <100)
const height = characters.filter(c => c.height >200);
const male = characters.filter(character => character.gender === "male");
//  console.log(male);

 function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(a => a.length <=5);
  }
  // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(a => !a.member)
  }
  // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

  
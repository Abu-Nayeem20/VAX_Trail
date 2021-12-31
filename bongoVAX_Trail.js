
const vaxTrail_list = 
[
    { name: 'Abdul', age: 23, temperature: 98 },
    { name: 'Rahat', age: 29, temperature: 96 },
    { name: 'Sumon', age: 33, temperature: 92 },
    { name: 'Aziz', age: 45, temperature: 100 },
    { name: 'Karim', age: 36, temperature: 98 },
    { name: 'Jashim', age: 58, temperature: 101 },
    { name: 'Monir', age: 38, temperature: 105 },
    { name: 'Rahim', age: 42, temperature: 97 },
    { name: 'Bashar', age: 49, temperature: 94 }
];

function vaxTrail (vaxTrail_list){

    const A = [];
    const B = [];
    const C = [];
    const D = [];

    for(person of vaxTrail_list){
       if(person.age >= 20 && person.age <= 30 && person.temperature < 100){
           A.push(person);
       }
       else if(person.age >= 31 && person.age <= 40 && person.temperature < 100){
           B.push(person);
       }
       else if(person.age >= 41 && person.age <= 50 && person.temperature < 100){
           C.push(person);
       }
       else if(person.temperature >= 100){
           D.push(person);
       }
    }
    const result = {A, B, C, D};
    return result;
}

const outPut = vaxTrail(vaxTrail_list);
console.log(outPut);
   
let player = {
    Name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3
    },
};


player['bestInTheWorld']= [2006, 2007, 2008, 2009, 2010, 2018],

// console.log('a jogadora ' + player.Name +  ' tem ' + player.age +  ' anos de idade.') 


console.log('A jogadora ' + player.Name + ' ' + player.lastName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')

let cars = ['Saab', 'Volvo', 'BMW'];

for (let key in cars) {
  console.log(key, cars[key]);
}

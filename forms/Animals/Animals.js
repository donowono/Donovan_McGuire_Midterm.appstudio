myAnimals = ['dog', 'cat', 'horse', 'meerkat']

userAnimal = prompt('Enter your favorite animal:')

myAnimals.push(userAnimal.toLowerCase())

lastAnimal = myAnimals.slice(-1)[0]

console.log(`The last animal is a/ an ${lastAnimal}.`) 

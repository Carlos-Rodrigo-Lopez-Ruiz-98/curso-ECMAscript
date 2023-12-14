// Array destructuring
let fruits = ['Manzana', 'Banana']
let [a, b] = fruits
console.log(a, fruits[1])

//Onject destructuring
let user = { userName: 'Rdorigo', age: 25 }
let { userName, age } = user
console.log(userName, user.age)

//Spread operator
let person = { name: 'Rodrigo', age: 25 }
let country = 'MX'
let data = { id: 1, ...person, country }
console.log(data)

//rest
function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}
sum(1, 1, 2, 3)
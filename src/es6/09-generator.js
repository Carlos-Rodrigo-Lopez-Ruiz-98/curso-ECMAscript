function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['rodrigo', 'lizeth', 'blanca', 'carlos', 'yuya'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
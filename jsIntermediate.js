//1. Addition
let result = 0
for (let i = 200; i <= 2700; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
        result += i
    }
}
console.log(result)



// 2.Shift the Values
const x = [2, 1, 6, 4, -7]
const newArr = []
for (let index = x.length - 1; index >= 0; index--) {
    newArr.push(x[index])
}
console.log(newArr)

//3.FizzBuzz
let array = []
for (let i = 0; i < 135; i++) {
    if (i % 3 == 0) {
        array[i] = "Fizz"
    } else if (i % 5 == 0) {
        array[i] = "Buzz"
    } else if (i % 15 == 0) {
        array[i] = "FizzBuzz"
    } else {
        array[i] = i
    }
}
console.log(array)



//4.Fibonacci
let fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
for (let i = 2; i <= 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
console.log(fibonacci)


//5.Remove the Negative
let x = [1, -2, 4, 1]

let positive = []

for (let i = 0; i <= x.length - 1; i++) {
    if (x[i] >= 0) {
        positive.push(x[i])
    }

}
console.log(positive)


//6.Communist Censorship
let array = ['Man', 'I', 'Love', 'The', 'Restart', 'Bootcamp']
let star = ''

for (let i = array[array.length - 1].length; i > 0; i--) {
    star = star + '*'
}
array[array.length - 1] = star

console.log(array)
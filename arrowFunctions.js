const myArrowFunction0 = (x, y, z) => {
  return x * y * z
}
console.log(myArrowFunction0(2, 3, 4)) // Outputs 24

const myArrowFunction1 = (x, y, z) => x * y * z // Short return form
console.log(myArrowFunction1(2, 3, 4)) // Outputs 24

const myArrowFunction2 = x => x * 2 // Short args and return form
console.log(myArrowFunction2(2)) // Outputs 4

let test = {
  x: 5,
  get2X: () => {
    console.log(this) // this is not defined in arrow function
    return this.x * 2
  },
  get2XClassicFunction: function () {
    console.log(this) // this is defined in classic function
    return this.x * 2
  }
}
console.log(test)
console.log(test.get2X())
console.log(test.get2XClassicFunction())

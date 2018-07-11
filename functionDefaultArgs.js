function myFunction0(x = 1, y = 2, z = 3)
{
  console.log(x, y, z) // Output "6 7 3"
}
myFunction0(6, 7)

function myFunction1(x = 1, y = 2, z = 3)
{
  console.log(x, y, z) // Output "1 7 9"
}
myFunction1(undefined, 7, 9)

function myFunction2(x = 1, y = 2, z = 3 + 5)
{
  console.log(x, y, z) // Output "6 7 8"
}
myFunction2(6, 7)

const myArrowFunction = (x = 1, y = 2, z = 3 + 5) => console.log(x, y, z) // Output "6 7 8"
myArrowFunction(6, 7) // It works with arrow functions

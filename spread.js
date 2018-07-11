//args variable is an array holding the passed function arguments
function function_one(...args)
{
    console.log(args)
    console.log(args.length)
}

function_one(1, 4)
function_one(1, 4, 7)
function_one(1, 4, 7, 0)


function function_two(a, b, ...args)
{
    console.log(args)
    console.log(args.length)
}

//"args" holds only 7 and 9
function_two(1, 5, 7, 9)

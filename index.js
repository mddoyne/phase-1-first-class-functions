function spy()
{

}

function receivesAFunction(callback)
{
    console.log(callback(spy));
}


function returnsANamedFunction()
{
    return returnsANamedFunction;
}

function returnsAnAnonymousFunction()
{
    return returnsAnAnonymousFunction;
}
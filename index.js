function spy()
{

}

function receivesAFunction(callback)
{
    console.log(callback(spy));
}


function returnsANamedFunction()
{
    
}

function returnsAnAnonymousFunction()
{
    return returnsAnAnonymousFunction(returnsANamedFunction());
}

function receivesAFunction(something)
{
    return something();
}

function returnsANamedFunction()
{
    return function something()
    {

    };
}

function returnsAnAnonymousFunction()
{
    return function()
    {

    };
}


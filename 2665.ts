type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let currentValue = init;
	return {
        increment: () =>{currentValue++; return currentValue;},
        decrement: () =>{currentValue--; return currentValue;},
        reset: () =>{currentValue = init; return currentValue;},

    }
};
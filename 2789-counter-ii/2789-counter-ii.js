/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let present = init;  // Store the initial value

    return {
        increment:()=> ++present,
        decrement:()=> --present,
        reset:()=> present = init,
    }
    
};

/**
 * const counter = createCounter(5)
 * console.log(counter.increment()); // 6
 * console.log(counter.reset()); // 5
 * console.log(counter.decrement()); // 4
 */

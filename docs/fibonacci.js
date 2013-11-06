/**
 * @author Richie Preece <richie.preece@gmail.com>
 * @version 0.0.1
 * @license GPL
 */

/**
 * @author Richie Preece <richie.preece@gmail.com>
 * @version 0.0.1
 * @license GPL
 * @function fibonacci
 * @since 0.0.1
 * @return {Number} - The value of the nth Fibonacci Number
 * @param {Number} n - nth Fibonacci Number to calculate
 * @param {Function} [cb] - Optional asynchronous callback to return value
 * @todo Complete this method
 */
function fibonacci(n, cb){
  if(n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
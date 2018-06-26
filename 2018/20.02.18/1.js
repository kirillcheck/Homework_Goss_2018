/*const {o3:obj} = require('./protochain.js')
function buildChain(o, result =[]) {
  if (o.prototype === null) {
    result.push(null);
    return result;
  }
  result.push(o.prototype.name)
  return buildChain(o.prototype, result)
}
*/

const o3 = require("./protochain").o3;
function buildChain(o, result =[]) {
    if (o.prototype === null) {
        result.push(null);
        return result;
    }
    result.push(o.prototype.name);
    return buildChain(o.prototype, result);
}

console.log(buildChain(o3));

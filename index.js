var Noble = require('./lib/noble');
var bindings = require('./lib/resolve-bindings')();

module.exports = {
  Noble: Noble,
  bindings: bindings
};

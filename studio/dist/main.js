define('studio',['require','exports','module','collection-manager'],function (require, exports, module) {
var collections = require('collection-manager');

console.log('collections', collections);

module.exports = {
    studio: 'yes'
};

});


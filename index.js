const { entities } = require('./mocks/entities');
const { selectedProps } = require('./mocks/selectedProps');
const { filterEntities } = require('./filterEntities');

console.log(filterEntities(entities, {}));

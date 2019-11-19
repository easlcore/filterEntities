const { entities } = require('./mocks/entities');
const { selectedProps } = require('./mocks/selectedProps');
const { filterEntities } = require('./filterEntities');

console.log(filterEntities(entities,  {
  inch: [13, 15.4],
  storage: [128],
  touchBar: [false],
}));

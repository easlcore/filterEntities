const { getAvailableFilters } = require('./getAvailableFilters');

module.exports.filterEntities = (entities, props) => {
  const keys = Object.keys(props);
  const availableFilters = getAvailableFilters(entities, props);

  if (!keys.length) {
    return {
      filteredEntities: entities,
      availableFilters
    };
  }

  const filteredEntities = entities.filter(entity => {
    return keys.every(key => props[key].some(k => k === entity[key]));
  });

  return {
    filteredEntities,
    availableFilters
  };
};

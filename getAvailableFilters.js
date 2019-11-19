module.exports.getAvailableFilters = (entities, selectedFilter) => {
  const allPossibleFilters = entities.reduce((acc, val) => {
    Object.keys(val).map(key => {

      if (acc[key]) {

        // push unique values
        if (!acc[key].some(v => v === val[key])) {
          acc[key].push(val[key]);
        }
      } else {
        acc[key] = [val[key]]
      }
    });

    return acc;
  }, {});

  if (!Object.keys(selectedFilter).length) {

    return allPossibleFilters;
  } else {

    const availableFilters = {}

    for (const key in selectedFilter) {
      availableFilters[key] = allPossibleFilters[key].filter(val => !selectedFilter[key].some(v => v === val));
    }

    return availableFilters;
  }
}

const chai = require('chai');  
const expect = chai.expect;

const { entities } = require('../mocks/entities');
const { selectedProps } = require('../mocks/selectedProps');
const { getAvailableFilters } = require('../getAvailableFilters');
const { filterEntities } = require('../filterEntities');

const mockAllFilters = {
  id: ['Apple MacBook Pro 15.4" 2019',
  'Apple MacBook Pro 16" 2019',
  'Apple MacBook 12" 2019',
  'Apple MacBook Pro 13" 2016',
  'Apple MacBook Air 13" 2017'],
  model: ['MacBook Pro', 'MacBook', 'MacBook Air'],
  inch: [15.4, 16, 12, 13],
  processor: ['i7', 'i9', 'i5'],
  memory: [8, 32, 16],
  year: [2019, 2016, 2017],
  touchBar: [true, false],
  storage: [512, 256, 128, 1024]
};

const mockSelectedProps = {
  inch: [13, 15.4],
  storage: [128],
  touchBar: [false]
};

const mockFilteredEntities = [
  {
    id: 'Apple MacBook Pro 13" 2016',
    model: 'MacBook Pro',
    inch: 13,
    processor: 'i5',
    memory: 8,
    year: 2016,
    touchBar: false,
    storage: 128
  }
];

const expectedFilter = {
  inch: [ 16, 12 ],
  storage: [ 512, 256, 1024 ],
  touchBar: [ true ]
};

describe('Filter entities', () => {
  describe('getAvailableFilters', () => {
    it('should return object with all possible filter values', () => {
      expect(getAvailableFilters(entities, {})).to.eql(mockAllFilters);
    });

    it ('should return filter object with available values, which were not used in selected props', () => {
      expect(getAvailableFilters(entities, mockSelectedProps)).to.eql(expectedFilter);
    })
  });

  describe('filterEntities', () => {
    it('should return filter object with all possible filter values and all entities', () => {
      expect(filterEntities(entities, {})).to.eql({
        filteredEntities: entities,
        availableFilters: mockAllFilters
      })
    });

    it(`should return filter object with available values,
    which were not used in selected props and filtered entities for that filter values`, () => {
      expect(filterEntities(entities, mockSelectedProps)).to.eql({
        filteredEntities: mockFilteredEntities,
        availableFilters: expectedFilter
      })
    });
  });
});

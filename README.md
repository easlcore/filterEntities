# filterEntities

Нужно реализовать фильтр для товаров, которые приходят полным списком с сервера.

Условия:
* ES6
* Unit Тесты
* UI - опционально (reactjs, js/ts)

Пример списка товаров:

```javascript
const entities = [
  {
    id: 'Apple MacBook Pro 15.4" 2019',
    model: 'MacBook Pro',
    inch: 15.4,
    processor: 'i7',
    memory: 8,
    year: 2019,
    touchBar: true,
    storage: 512,
  },
  {
    id: 'Apple MacBook Pro 16" 2019',
    model: 'MacBook Pro',
    inch: 16,
    processor: 'i9',
    memory: 32,
    year: 2019,
    touchBar: true,
    storage: 256,
  },
  {
    id: 'Apple MacBook 12" 2019',
    model: 'MacBook',
    inch: 12,
    processor: 'i7',
    memory: 16,
    year: 2019,
    touchBar: false,
    storage: 128,
  },
  {
    id: 'Apple MacBook Pro 13" 2016',
    model: 'MacBook Pro',
    inch: 13,
    processor: 'i5',
    memory: 8,
    year: 2016,
    touchBar: false,
    storage: 128,
  },
  {
    id: 'Apple MacBook Air 13" 2017',
    model: 'MacBook Air',
    inch: 13,
    processor: 'i5',
    memory: 32,
    year: 2017,
    touchBar: true,
    storage: 1024,
  },
];
```

Пользователь может выбрать фильтр свойств, которые ему интересны:

```javascript
const selectedProperties = {
  inch: [13, 15.4],
  storage: [128],
  touchBar: [false],
};
```

Необходимо получить товары, которые подходят к фильтру (filteredEntities) и список доступных фильтров (filters), с учетом выбранных фильтров:
```javascript
console.log({ filteredEntities, filter });
```


Результат для выбранных параметров среди имеющихся товаров будет такой:

```javascript
const filter = {
  id: ['Apple MacBook Pro 15.4" 2019'],
  inch: [15.4],
  memory: [8, 32],
  model: ['MacBook Pro'],
  processor: ['i7', 'i9'],
  storage: [512, 256],
  touchBar: [true],
  year: [2019],
};

const filteredEntities = [
  {
    id: 'Apple MacBook Pro 15.4" 2019',
    inch: 15.4,
    memory: 8,
    model: 'MacBook Pro',
    processor: 'i7',
    storage: 512,
    touchBar: true,
    year: 2019,
  },
  {
    id: 'Apple MacBook Pro 15.4" 2019',
    inch: 15.4,
    memory: 32,
    model: 'MacBook Pro',
    processor: 'i9',
    storage: 256,
    touchBar: true,
    year: 2019,
  }
];
```
Результат для пустого фильтра:

```javascript
const selectedProperties = {};

const filter = {
  id: ['Apple MacBook Pro 15.4" 2019', 'Apple MacBook 12" 2019', 'Apple MacBook Pro 13" 2016', 'Apple MacBook Air 13" 2017'],
  inch: [15.4, 12, 13],
  memory: [8, 32, 16],
  model: ['MacBook Pro', 'MacBook', 'MacBook Air'],
  processor: ['i7', 'i9', 'i5'],
  storage: [512, 256, 128, 1024],
  touchBar: [true, false],
  year: [2019, 2016, 2017],
};

const filteredEntities =  // эквивалентный список entities

```

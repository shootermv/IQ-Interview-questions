import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const groups = [
  {
    id: 'Java',
    name: 'Java'
  },
  {
    id: 'Android',
    name: 'Android'
  },
  {
    id: 'Javascript',
    name: 'Javascript'
  },
  {
    id: 'DevOps',
    name: 'DevOps'
  },
  {
    id: 'General',
    name: 'General'
  }
];

class GroupApi {
  static getAllGroups() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], groups));
      }, delay);
    });
  }
}
export default GroupApi;
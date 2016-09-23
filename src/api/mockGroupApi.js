import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
import firebase from 'firebase';
import fireBaseInit from './fbInit';
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
  static convertToArray(data) {
    return Object.keys(data).map(x => { 
      return {id: x, name: data[x].name}
    }) 
  }
  static getAllGroups() {
    const ref = fireBaseInit.ref('tikalGroups');
    return new Promise((resolve, reject) => {
        ref.on("value", (data)=> {
          resolve(this.convertToArray(data.val()));
        });
    });
  }
}
export default GroupApi;
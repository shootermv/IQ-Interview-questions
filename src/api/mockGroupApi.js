import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
import firebase from 'firebase';
import fireBaseInit from './fbInit';


class GroupApi {
  static convertToArray(data) {
    return Object.keys(data).map(x => { 

      return {id: x, name: data[x].name, companies: data[x].companies}

    }) 
  }
  static getAllGroups() {
    const ref = fireBaseInit.ref('groups');
    return new Promise((resolve, reject) => {
        ref.on("value", (data)=> {
          resolve(this.convertToArray(data.val()));
        });
    });
  }
}
export default GroupApi;
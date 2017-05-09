import delay from './delay';
import firebase from 'firebase';
import fireBaseInit from './fbInit';

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (company) => {
  return replaceAll(company.name, ' ', '-');
};

class CompanyApi {
  static getAllCompanies(currentGroupObj) {
    return currentGroupObj.companies;
  }

  static saveCompany(company) {
  return new Promise((resolve, reject) => {
      company = Object.assign({}, company); // to avoid manipulating object passed in.
      const companiesRef = fireBaseInit.ref('companies');
      let newCompany = {};
      newCompany = {
        name: company.name,
        description: company.description
      };

      companiesRef.child(company.name).set({
        name: company.name,
        description: company.description
      });

      companiesRef.on('value', snapVal =>
          resolve(snapVal)
      , e => reject(e));

  });
}

  static deleteCompany(companyId) {
    return new Promise((resolve, reject) => {
      /* setTimeout(() => {
         const indexOfCompanyToDelete = companies.findIndex(company => {
           company.companyId == companyId;
         });
         companies.splice(indexOfCompanyToDelete, 1);
         resolve();
       }, delay);*/
    });
  }
}

export default CompanyApi;

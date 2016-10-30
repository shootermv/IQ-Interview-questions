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
    console.log("companyAPI-> ", currentGroupObj);
    return currentGroupObj.companies;
  }

  static saveCompany(company) {
    company = Object.assign({}, company); // to avoid manipulating object passed in.
    const companiesRef = fireBaseInit.ref('companies');
    let newCompany = {};
    newCompany = {
      name: company.name,
      description: company.description
    };
    
    companiesRef.child(company.name).set({name: company.name,
      description: company.description});  

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
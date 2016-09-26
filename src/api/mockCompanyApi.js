import delay from './delay';


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
    company = Object.assign({}, company); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCompanyTitleLength = 1;
        if (company.name.length < minCompanyTitleLength) {
          reject(`Title must be at least ${minCompanyTitleLength} characters.`);
        }

        if (company.id) {
          const existingCompanyIndex = companies.findIndex(a => a.id == company.id);
          companies.splice(existingCompanyIndex, 1, company);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new companies in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          company.id = generateId(company);
          company.watchHref = `http://www.pluralsight.com/companies/${company.id}`;
          companies.push(company);
        }

        resolve(company);
      }, delay);
    });
  }

  static deleteCompany(companyId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCompanyToDelete = companies.findIndex(company => {
          company.companyId == companyId;
        });
        companies.splice(indexOfCompanyToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CompanyApi;
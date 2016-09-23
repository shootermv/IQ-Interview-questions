import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const companies = [
  {
    id: "react-flux-building-applications",
    name: "what is type of null?",
    watchHref: "http://www.pluralsight.com/companies/react-flux-building-applications",
    authorId: "moshe-vilner",
    length: "Aternity",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    name: "deep copy vs shallow copy",
    watchHref: "http://www.pluralsight.com/companies/writing-clean-code-humans",
    authorId: "moshe-vilner",
    length: "Aternity",
    category: "JavaScript"
  },
  {
    id: "architecture",
    name: "3 ways to create object in javascript",
    watchHref: "http://www.pluralsight.com/companies/architecting-applications-dotnet",
    authorId: "moshe-vilner",
    length: "Aternity",
    category: "JavaScript"
  },
  {
    id: "career-reboot-for-developer-mind",
    name: "What is meaning of 'this' keyword?",
    watchHref: "http://www.pluralsight.com/companies/career-reboot-for-developer-mind",
    authorId: "moshe-vilner",
    length: "Aternity",
    category: "JavaScript"
  },
  {
    id: "web-components-shadow-dom",
    name: "How to expose public method",
    watchHref: "http://www.pluralsight.com/companies/web-components-shadow-dom",
    authorId: "moshe-vilner",
    length: "Aternity",
    category: "Javascript"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (company) => {
  return replaceAll(company.name, ' ', '-');
};

class CompanyApi {
  static getAllCompanies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], companies));
      }, delay);
    });
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
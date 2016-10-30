import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "react-flux-building-applications",
    title: "what is type of null?",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "moshe-vilner",
    length: "Aternity",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "deep copy vs shallow copy",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "moshe-vilner",
    length: "Aternity",
    category: "JavaScript"
  },
  {
    id: "architecture",
    title: "3 ways to create object in javascript",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "moshe-vilner",
    length: "Aternity",
    category: "JavaScript"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "What is meaning of 'this' keyword?",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "moshe-vilner",
    length: "Aternity",
    category: "JavaScript"
  },
  {
    id: "web-components-shadow-dom",
    title: "How to expose public method",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "moshe-vilner",
    length: "Aternity",
    category: "Javascript"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;

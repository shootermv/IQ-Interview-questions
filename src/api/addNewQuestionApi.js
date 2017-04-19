import delay from './delay';
import firebase from 'firebase';
import fireBaseInit from './fbInit';
import { browserHistory } from 'react-router';

class addNewQuestionApi {
    static convertToArray(data) {
        return Object.keys(data.questions).map(x => {
            return { id: x, title: data.questions[x].title, answer: data.questions[x].answer };
        });
    }

    static saveNewQuestion(question, groupName, companyName) {
        question = Object.assign({}, question); // to avoid manipulating object passed in.
        const refObj = fireBaseInit.ref('groups/' + groupName + '/companies/' + companyName + '/questions');
        let newQuestion = {
            name: question.questionTitle,
            description: question.questionAnswer
        };
        refObj.child(question.questionTitle).set({
            answer: question.questionAnswer,
            description: question.questionTitle
        });
        browserHistory.push('/viewQuestions/' + companyName);

    }
}
export default addNewQuestionApi;
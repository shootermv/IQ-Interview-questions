import delay from './delay';
import firebase from 'firebase';
import fireBaseInit from './fbInit';

class viewQuestions{
    static getAllQuestionsByCompanyName(companyName){
        const currentGroup = localStorage.getItem("currentGroup");

        const groupRef = fireBaseInit.ref('groups/'+currentGroup);
        return new Promise((resolve, reject) => {
            groupRef.on("value", (data)=> {
            resolve(data.val());
            });
        });
        
    }
}
export default viewQuestions;
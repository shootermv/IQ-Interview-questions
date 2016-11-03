import delay from './delay';
import firebase from 'firebase';
import fireBaseInit from './fbInit';

class viewQuestionsApi{
    static convertToArray(data) {
        return Object.keys(data.questions).map(x => { 
        return {id: x, title: data.questions[x].title, answer: data.questions[x].answer};
        }); 
    }
    static getAllQuestionsByCompanyName(companyName){
        const currentGroup = localStorage.getItem("currentGroup");
        console.log(companyName)
        const groupRef = fireBaseInit.ref('groups/'+currentGroup+'/companies/'+companyName);
        return new Promise((resolve, reject) => {
            groupRef.on("value", (data)=> {
            resolve(this.convertToArray(data.val()));
            });
        });
        
    }
}
export default viewQuestionsApi;
import React, {propTypes} from 'react';
import Header from '../common/Header';
import {connect, bindActionCreators} from 'react-redux';
import * as companyActions from '../../actions/companyActions';
import viewQuestions from '../../api/viewQuestions.js';


class viewQuestionsPage extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
          companyName : this.props.params.companyName
        }
       
        viewQuestions.getAllQuestionsByCompanyName(this.state.companyName).then(groups => {
          console.log(groups)
        }).catch(error => {
          throw(error);
        });
        
    }



  
  render() {
    return (
      <div>
        {this.props.baba}
        <div>{this.state.companyName}</div>
      </div>
      
    );
  }
  
}

function mapStateToProps(state, ownProps) {
  return {
    baba: ownProps.params.companyName
  }
}



export default connect(mapStateToProps)(viewQuestionsPage);
import React, {PropTypes} from 'react';
import Header from '../common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionActions from '../../actions/addNewQuestionAction';

class addNewQuestionPage extends React.Component {
  constructor(props) {
      super(props);
      
      this.state = {
          questionTitle   : "",
          questionAnswer  : ""
      };

      this.handleQuestionTitle = this.handleQuestionTitle.bind(this); 
      this.handleQuestionAnswer = this.handleQuestionAnswer.bind(this);
      this.saveNewQuestion = this.saveNewQuestion.bind(this);
      
  }

  saveNewQuestion(){
    let newQuestionObj = {
      questionTitle    : this.state.questionTitle,
      questionAnswer   : this.state.questionAnswer
    };
    
    this.props.saveNewQuestion(newQuestionObj, this.props.params.groupName, this.props.params.companyName);
  }

  handleQuestionTitle(e){
    this.setState({questionTitle: e.target.value});
  }

  handleQuestionAnswer(e){
    this.setState({questionAnswer: e.target.value});
  }

  render() {
    return (
      <fieldset style={{marginTop:'30px'}}>
        <p>
          <label style={{width:'150px'}}>Question:</label>
          <input type = "text"
                id = "txtQuestionTitle" onChange={this.handleQuestionTitle} />
        </p>
        <p>
          <label style={{width:'150px'}}>Answer:</label>
          <input type = "text"
                id = "txtQuestionAnswer" onChange={this.handleQuestionAnswer} />
        </p>
        <p> <button id="btnSaveNewQuestion" onClick={this.saveNewQuestion}>Add New Question</button> </p>
      </fieldset>
      );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    
  }
}

addNewQuestionPage.propTypes = {
  
};

export default connect(mapStateToProps, questionActions)(addNewQuestionPage);
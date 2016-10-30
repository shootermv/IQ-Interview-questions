import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionActions from '../../actions/questionActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class QuestionsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    
    const {questions} = this.props;

    return (
      <div>
        <h1>Questions</h1>
        <input type="submit"
               value="Add Question"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={questions}/>
      </div>
    );
  }
}

QuestionsPage.propTypes = {
  questions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {  
  return {    
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);

import React, { PropTypes } from 'react';
import Header from '../common/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as questionActions from '../../actions/questionActions';

class viewQuestionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: this.props.params.companyName
    };
    this.props.questionActions.loadQuestions(this.state.companyName);
  }

  questionList(questionList) {
    return (
      <div className="row" style={{ marginTop: "5px" }}>
        {questionList.map(item =>
          <div className="col s12 m6" key={item.id}>
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{item.title}</span>
                <p>{item.answer}</p>
              </div>
              <div className="card-action">
                <a href="#">view Answer And Coments</a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  render() {
    const { questionsList } = this.props;
    const qList = [];
    if (questionsList.length > 0) {
      const qList = this.questionList(questionsList);
      const newQuestionUrl = this.props.newQuestionUrl;
      return (
        <div>
          <nav style={{ backgroundColor: 'green', fontSize: '11px', height: '30px', lineHeight: "30px" }}>
            <div className="nav-wrapper">
              <div className="col s12" style={{ paddingLeft: "10px" }}>
                <a href="#!" className="breadcrumb" style={{ fontSize: "13px" }}>{this.props.currentGroupName}</a>
                <a href="#!" className="breadcrumb" style={{ fontSize: "13px" }}>{this.state.companyName}</a>
              </div>
            </div>
          </nav>
          {qList}
          <div><a href={newQuestionUrl} style={{ textDecoration: "underline" }}> Add New Question </a></div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    questionActions: bindActionCreators(questionActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    companyName: ownProps.params.companyName,
    questionsList: state.questions,
    currentGroupName: localStorage.getItem("currentGroup"),
    newQuestionUrl: "../addnNewQuestions/" + localStorage.getItem("currentGroup") + "/" + ownProps.params.companyName
  };
}

viewQuestionsPage.propTypes = {
  questionList: PropTypes.object.isRequired,
  params: PropTypes.object,
  questionActions: PropTypes.object,
  questionsList: PropTypes.func.isRequired,
  newQuestionUrl: PropTypes.string.isRequired,
  currentGroupName: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(viewQuestionsPage);
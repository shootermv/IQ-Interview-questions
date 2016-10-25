// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import ShouldLogIn from './login/shouldLogIn'; 
import LoggedIn from './login/loggedIn';

class App extends React.Component {
  getPage(){
      return (this.props.loggedin) ?  <LoggedIn children={this.props.children}/> : <ShouldLogIn />;
  } 

  render() {
    return (
      <div className="container">
        {this.getPage()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    loggedin: state.auth.currently !== 'ANONYMOUS'
  };
}

App.propTypes = {
  loggedin: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(App);

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as companyActions from '../../actions/companyActions';
import CompanyList from './CompanyList';



class CompaniesPage extends React.Component {
  constructor(props, context) {
    // save group name in localstorage
    
    super(props, context);
  }
  componentDidMount () {
    this.props.loadCompanies(this.props.params.groupId);
    localStorage.setItem("currentGroup", this.props.params.groupId);

  }
  render() {
    //console.log("this ", this)
    const {companies} = this.props;
    //console.log(companies);
    return (
      <CompanyList companies={companies}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    companies: state.companies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCompanies: bindActionCreators(companyActions.loadCompanies, dispatch)
  };
}

CompaniesPage.propTypes = {
 loadCompanies: PropTypes.object.isRequired,
 companies: PropTypes.array.isRequired,
 params: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
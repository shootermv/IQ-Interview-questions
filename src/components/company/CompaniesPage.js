import React from 'react';
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
    localStorage.setItem("currentGroup", this.props.params.group);
    this.props.loadCompanies();
  }
  render() {
    const {companies} = this.props;
    
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

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
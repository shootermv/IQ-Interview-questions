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
     this.props.loadCompanies(this.props.params.groupId);
  }
  componentDidMount () {
   

  }
  render() {
    const {companies} = this.props;
    console.log("baba--> ", companies);
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
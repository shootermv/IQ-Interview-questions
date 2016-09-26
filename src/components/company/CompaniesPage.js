import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as companyActions from '../../actions/companyActions';
import CompanyList from './CompanyList';
import { browserHistory } from 'react-router';


class CompaniesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCompanyPage = this.redirectToAddCompanyPage.bind(this);
  }

  redirectToAddCompanyPage() {
    browserHistory.push('/company');
  }
  componentDidMount () {
    this.props.loadCompanies(this.props.params.groupId);
  }
  render() {
    const {companies} = this.props;
    
    return (
       <div>
         <h1>Company</h1>
         <input type="submit"
               value="Add Company"
               className="btn btn-primary"
               onClick={this.redirectToAddCompanyPage}/>
         <CompanyList companies={companies}/>
       </div>
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
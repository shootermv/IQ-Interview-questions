import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as companyActions from '../../actions/companyActions';
import CompanyForm from './CompanyForm';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageCompanyPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      company: Object.assign({}, props.company),
      errors: {},
      saving: false
    };

    this.updateCompanyState = this.updateCompanyState.bind(this);
    this.saveCompany = this.saveCompany.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.company.id != nextProps.company.id) {
      // Necessary to populate form when existing company is loaded directly.
      this.setState({company: Object.assign({}, nextProps.company)});
    }
  }

  updateCompanyState(event) {
    const field = event.target.name;
    let company = this.state.company;
    company[field] = event.target.value;
    return this.setState({company: company});
  }

  companyFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.company.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveCompany(event) {
    event.preventDefault();

    if (!this.companyFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveCompany(this.state.company)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Company saved');
    this.context.router.push('/companies');
  }

  render() {
    return (
      <CompanyForm
        allAuthors={this.props.authors}
        onChange={this.updateCompanyState}
        onSave={this.saveCompany}
        company={this.state.company}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}
ManageCompanyPage.propTypes = {
  company: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageCompanyPage.contextTypes = {
  router: PropTypes.object
};

function getCompanyById(companies, id) {
  const company = companies.filter(company=> company.id == id);
  if (company) return companies[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const companyId = ownProps.params.id; // from the path `/course/:id`

  let company = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (companyId && state.questions.length > 0) {
    company  = getCompanyById(state.questions, companyId);
  }

  return {
    company: company,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(companyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCompanyPage);

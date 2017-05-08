import React, { PropTypes } from 'react';
import Header from '../common/Header';
import { connect, bindActionCreators } from 'react-redux';
import * as companyActions from '../../actions/companyActions';


class AddNewCompanyPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      companyAddress: "",
      companyDescription: ""
    };

    this.handleCompanyName = this.handleCompanyName.bind(this);
    this.handleCompanyDescription = this.handleCompanyDescription.bind(this);
    this.saveNewCompany = this.saveNewCompany.bind(this);
    this.handleCompanyAddress = this.handleCompanyAddress.bind(this)
  }

  saveNewCompany() {
    let newCompanyObj = {
      name: this.state.companyName,
      address: this.state.companyAddress,
      description: this.state.companyDescription
    };

    this.props.saveNewCompany(newCompanyObj);
  }

  handleCompanyName(e) {
    this.setState({ companyName: e.target.value });
  }

  handleCompanyAddress(e) {
    this.setState({ companyAddress: e.target.value });
  }

  handleCompanyDescription(e) {
    this.setState({ companyDescription: e.target.value });
  }

  handleCompanyGroup(e) {
    this.setState({ companyGroup: e.target.value });
  }

  render() {
    return (
      <fieldset style={{ marginTop: '30px' }}>
        <p>
          <label style={{ width: '150px' }}>Company Name:</label>
          <input type="text"
            id="txtCompanyName" onChange={this.handleCompanyName} />
        </p>
        <p>
          <label style={{ width: '150px' }}>Company Address:</label>
          <input type="text"
            id="txtCompanyAddress" onChange={this.handleCompanyAddress} />
        </p>
        <p>
          <label style={{ width: '150px' }}>Comment:</label>
          <textarea id="txtComment"
            rows="3"
            cols="80" onChange={this.handleCompanyDescription}></textarea>
        </p>
        <p> <button id="btnSaveNewCompany" onClick={this.saveNewCompany}>Add New Company</button> </p>
      </fieldset>
    );
  }
}
AddNewCompanyPage.propTypes = {
  saveNewCompany: PropTypes.func.isRequired
};
function mapStateToProps(state, ownProps) {
  return {
    groupsListObj: JSON.parse(localStorage.getItem("groupsList"))
  };
}



export default connect(mapStateToProps, companyActions)(AddNewCompanyPage);

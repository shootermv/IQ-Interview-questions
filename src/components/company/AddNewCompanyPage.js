import React from 'react';
import Header from '../common/Header';
import {connect} from 'react-redux';
import * as companyActions from '../../actions/companyActions';


class AddNewCompanyPage extends React.Component {

   constructor(props) {
        super(props)
        this.state = {
            companyName         : "",
            companyAddress      : "",
            companyGroup        : "",
            companyDescription  : ""
        };
        
    }

  clickTest(){
    
    var newCompanyObj = {
      name          : this.state.companyName,
      address       : this.state.companyAddress,
      group         : this.state.companyGroup,
      description   : this.state.companyDescription
    }
    
    companyActions.saveNewCompany(newCompanyObj);
  }

  handleCompanyName(e){
    this.setState({companyName: e.target.value});
  }

  handleCompanyAddress(e){
    this.setState({companyAddress: e.target.value});
  }

  handleCompanyDescription(e){
    this.setState({companyDescription: e.target.value});
  }

  handleCompanyGroup(e){
    this.setState({companyGroup: e.target.value});
  }

  render() {
    return (
      <fieldset style={{marginTop:'30px'}}>
        <p>
          <label style={{width:'150px'}}>Company Name:</label>
          <input type = "text"
                 id = "txtCompanyName" onChange={this.handleCompanyName.bind(this)} />
        </p>
        <p>
          <label style={{width:'150px'}}>Company Address:</label>
          <input type = "text"
                 id = "txtCompanyAddress" onChange={this.handleCompanyAddress.bind(this)} />
        </p>
        <p>
          <label style={{width:'150px'}}>Group Name:</label>
          <select style={{width:'150px'}}  onChange={this.handleCompanyGroup.bind(this)}>
          {this.props.groupsListObj.map((item) => (
            <option id={item.id} key={item.id}>{item.name}</option>
          ))}
             
          </select>
        </p>
        <p>
          <label style={{width:'150px'}}>Comment:</label>
          <textarea id="txtComment"
                  rows="3"
                  cols="80" onChange={this.handleCompanyDescription.bind(this)}></textarea>
        </p>
        <p> <button id="btnSaveNewCompany" onClick={this.clickTest.bind(this)}>Add New Company</button> </p>
      </fieldset>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    groupsListObj : JSON.parse(localStorage.getItem("groupsList"))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveNewCompany: bindActionCreators(companyActions.saveNewCompany, dispatch)
  };
}

export default connect(mapStateToProps)(AddNewCompanyPage);
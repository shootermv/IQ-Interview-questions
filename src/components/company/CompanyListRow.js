import React, {PropTypes} from 'react';
import {Link} from 'react-router';
//company.watchHref
const CompanyListRow = ({company}) => {
  return (
    <tr className="table-entities">
      <td><a href={'/viewQuestions/'+company.name}><i className="fa fa-eye" aria-hidden="true"></i></a></td>
      <td><span>{company.name}</span></td>
      <td>{company.description}</td>
    </tr>
  );
};

CompanyListRow.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyListRow;

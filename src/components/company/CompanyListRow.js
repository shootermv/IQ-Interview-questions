import React, {PropTypes} from 'react';
import {Link} from 'react-router';
//company.watchHref
const CompanyListRow = ({company}) => {
  return (
    <tr>
      <td><a href={'/viewQuestions/'+company.name}>Watch</a></td>
      <td><Link to={'/company/' + company.id}>{company.name}</Link></td>
      <td>{company.description}</td>
    </tr>
  );
};

CompanyListRow.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyListRow;
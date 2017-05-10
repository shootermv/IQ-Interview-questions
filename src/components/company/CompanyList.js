import React, {PropTypes} from 'react';
import CompanyListRow from './CompanyListRow';

const CompanyList = ({companies}) => {
  return (
    <table className="table">
      <tbody>
      {Object.keys(companies).map(company =>
        <CompanyListRow key={companies[company].id} company={companies[company]}/>
      )}
      </tbody>
    </table>
  );
};

CompanyList.propTypes = {
  companies: PropTypes.object.isRequired
};

export default CompanyList;

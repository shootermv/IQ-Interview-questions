import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CompanyForm = ({company, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Add Company</h1>
      <TextInput
        name="name"
        label="Name"
        value={company.name}
        onChange={onChange}
        error={errors.name}/>

      <TextInput
        name="description"
        label="Description"
        value={company.description}
        onChange={onChange}
        error={errors.description}/>

      <TextInput
        name="website"
        label="Website"
        value={company.website}
        onChange={onChange}
        error={errors.website}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

CompanyForm.propTypes = {
  company: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CompanyForm;

import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CompanyForm = ({company, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Company</h1>
      <TextInput
        name="name"
        label="Name"
        value={company.name}
        onChange={onChange}
        error={errors.name}/>

      <SelectInput
        name="authorId"
        label="Author"
        value={company.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}/>

      <TextInput
        name="category"
        label="Category"
        value={company.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Company"
        value={company.length}
        onChange={onChange}
        error={errors.length}/>

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
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CompanyForm;

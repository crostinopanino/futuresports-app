import React from 'react';

// Reusable form field component that can handle different types of inputs
const FormInput = ({ label, type, name, value, onChange, checked, placeholder }) => (
  <div className="form-input">
    {label && <label htmlFor={name}>{label}</label>}
    {type === 'checkbox' ? (
      <input
        id={name}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
    ) : type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder} />
    ) : (
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        placeholder={placeholder} />
    )}
  </div>
);

// General form used for creating forms with different fields
const Form = ({ formData, handleChange, handleSubmit, children, buttonLabel }) => {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {/* Dynamic form inputs based on formData prop */}
      {Object.entries(formData).map(([key, input]) => (
        <FormInput
          key={key}
          type={input.type}
          name={key}
          label={input.label}
          value={input.value}
          checked={input.checked}
          onChange={handleChange}
          placeholder={input.placeholder}
        />
      ))}
      {children} {/* For extra content such as additional buttons or links */}
      <button type="submit" className="submit-btn">{buttonLabel}</button>
    </form>
  );
};

export default Form;
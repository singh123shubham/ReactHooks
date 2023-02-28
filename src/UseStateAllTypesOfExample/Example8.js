import React, { useState } from 'react';

function Example8() {
  const [fields, setFields] = useState([{ value: null }]);

  const addField = () => {
    setFields([...fields, { value: null }]);
  };

  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleFieldChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div key={index}>
            <h5>{field.value}</h5>
          <input
            type="text"
            value={field.value}
            onChange={(event) => handleFieldChange(index, event)}
          />
          <button onClick={() => removeField(index)}>Delete</button>
        </div>
      ))}
      <button onClick={() => addField()}>Add Field</button>
    </div>
  );
}
export default Example8
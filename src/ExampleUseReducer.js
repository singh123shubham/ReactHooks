// ? useReducer is a React hook that allows you to manage state in your components using a reducer
//  ? function. It's similar to useState, but it's more suitable for managing complex state that involves
// ? multiple values and more complicated state transitions.

import React, { useReducer, useState } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
  count:0
};

function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    case 'setMessage':
      return { ...state, message: action.payload };
    case "add":
        return {...state,count:action.payload};
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formData, setFormData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setFormData(state);
    dispatch({ type: 'reset' });
  }

  return (
    <>
    <div>
        <h1>useReducer example...</h1>
        <p>Count : {state.count}</p>
        <button onClick={()=> dispatch({type:'add',payload:state.count+1})}>button</button>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={state.name}
            onChange={(event) =>
              dispatch({ type: 'setName', payload: event.target.value })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={state.email}
            onChange={(event) =>
              dispatch({ type: 'setEmail', payload: event.target.value })
            }
          />
        </label>
        <label>
          Message:
          <textarea
            value={state.message}
            onChange={(event) =>
              dispatch({ type: 'setMessage', payload: event.target.value })
            }
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div>
          <h2>Form Data:</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Message: {formData.message}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default ContactForm;

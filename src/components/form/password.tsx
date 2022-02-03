import React from 'react';

const Password = ({ name, label, onChange }: InputType) => {
  const [state, setState] = React.useState('password');
  //   console.log(state);
  const showPassword = () => {
    setState(state === 'password' ? 'text' : 'password');
  };
  return (
    <div className="flex flex-col relative">
      <label htmlFor={name}>{label}</label>
      <input
        {...{ name, onChange, type: state }}
        className="rounded py-2 focus:ring-blue-700"
        autoComplete="off"
        autoCorrect="off"
      />
      <div className="absolute right-0 top-0 mt-2 mr-2">
        <button
          className="bg-blue-700 text-white rounded py-1 px-2 focus:ring-blue-700 text-sm"
          onClick={showPassword}
        >
          {state === 'password' ? 'Show' : 'Hide'}
        </button>
      </div>
    </div>
  );
};

export default Password;

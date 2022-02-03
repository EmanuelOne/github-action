import Password from './password';

const Inputs = ({ name, label, onChange, type }: InputType) => {
  if (type === 'password') {
    return <Password {...{ name, label, onChange }} />;
  }
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        {...{ name, onChange, type: type || 'text' }}
        className="rounded py-2 focus:ring-blue-700"
        autoComplete="off"
        autoCorrect="off"
      />
    </div>
  );
};

export default Inputs;

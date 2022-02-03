import { useState } from 'react';
import { Link } from 'react-router-dom';
import Inputs from '../components/form/inputs';

const Register = () => {
  const [form, setForm] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const inputsArray = [
    { label: 'First Name', name: 'firstName' },
    { label: 'Last Name', name: 'lastName' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Phone Number', name: 'phoneNumber', type: 'tel' },
    { label: 'Password', name: 'password', type: 'password' },
    {
      label: 'Confirm Password',
      name: 'confirmPassword',
      type: 'password',
    },
  ];
  return (
    <div className="flex bg-gray-50">
      <div className="bg-blue-700 h-screen w-2/6"></div>
      <div className="w-4/6  md:px-16 px-8 my-auto flex flex-col justify-center gap-5 text-blue-900">
        <h1 className="text-xl font-extrabold">Register</h1>
        <div className="gap-5 flex flex-col">
          <h4>Manage all your lottery efficiently</h4>
          <p className="md:w-4/5 w-full text-gray-400">
            Let's get you all setup so you can verify your personal account and
            begin setting up your profile.
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-x-10">
            {inputsArray.map(({ label, name, type }, key) => (
              <Inputs
                {...{
                  onChange: handleChange,
                  name,
                  label,
                  key,
                  type,
                }}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 w-full md:w-3/5 text-sm">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                Yes,I want to receive emails from Lottery.com
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="flex items-center">
                I agree to all the{' '}
                <a
                  href="https://www.google.com"
                  className="text-blue-700 no-underline ml-1"
                >
                  Terms,Privacy,Policy{' '}
                  <span className="text-primary-400 mx-1">and</span>
                  Fees
                </a>
              </label>
            </div>
          </div>
          <div className="flex justify-start">
            <button
              className="bg-blue-700 text-white rounded py-3 px-5 focus:ring-blue-700 text-sm text-center"
              onClick={() => {
                console.log(form);
              }}
            >
              Create Account
            </button>
          </div>
          <div>
            <h5>
              Already have an account?{' '}
              <Link to={'/login'} className="text-blue-700 no-underline">
                Log in
              </Link>{' '}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

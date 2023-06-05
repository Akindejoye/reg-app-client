import { useState } from 'react';
import CustomInput from '../../components/customInput';
import './style.css';

const Register = () => {
  const [values, setValues] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    country: '',
    occupation: '',
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValues((values) => ({
      ...values,
      [target.name]: target.value
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  }

  return ( 
    <>
      <div className="register">
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
        <div className="register__container">
          <div className="container-a">
            <div className="input-box">
              <CustomInput
                name='userName'
                placeholder='User Name'
                type='text'
                value={values.userName}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <CustomInput
                name='firstName'
                placeholder='First Name'
                type='text'
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <CustomInput
                name='lastName'
                placeholder='Last Name'
                type='text'
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <CustomInput
                name='email'
                placeholder='Enter your email address'
                type='email'
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="container-b">
          <div className="input-box">
            <CustomInput
              name='city'
              placeholder='Name of City'
              type='text'
              value={values.city}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <CustomInput
              name='state'
              placeholder='Name of State'
              type='text'
              value={values.state}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <CustomInput
              name='country'
              placeholder='Name of Country'
              type='text'
              value={values.country}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <CustomInput
              name='occupation'
              placeholder='Name of Occupation'
              type='text'
              value={values.occupation}
              onChange={handleChange}
            />
          </div>
          </div>
        </div>
          <div className="buton-box">
            <button className='register-button'>Submit</button>
          </div>
        </form>
      </div>
    </>
   );
}
 
export default Register;
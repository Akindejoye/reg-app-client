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
  })

  const handleChange = () => {
    console.log('Change');
  }

  return ( 
    <>
      <div className="register">
        <h1>Register Form</h1>
        <form>
        <div className="register__container">
          <div className="container-a">
            <div className="input-box">
              <CustomInput
                name={values.userName}
                placeholder='User Name'
                type='text'
                value={values.userName}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <CustomInput
                name={values.firstName}
                placeholder='First Name'
                type='text'
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <CustomInput
                name={values.lastName}
                placeholder='Last Name'
                type='text'
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <CustomInput
                name={values.email}
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
              name={values.city}
              placeholder='Name of City'
              type='text'
              value={values.city}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <CustomInput
              name={values.state}
              placeholder='Name of State'
              type='text'
              value={values.state}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <CustomInput
              name={values.country}
              placeholder='Name of Country'
              type='text'
              value={values.country}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <CustomInput
              name={values.occupation}
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
import { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { UserInputInterface } from '../../Interface';
import { useCreateNewUser } from '../../customHooks/useUsers';
import CustomInput from '../../components/customInput';
import './style.css';



const Register = () => {
  const [values, setValues] = useState<UserInputInterface>({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    country: '',
    occupation: '',
  });
  
  const handleSuccess = (data: any) => {
    console.log('User created successfully:', data);
    alert('User created successfully');
  };

  const handleError = (error: any) => {
    console.error('Error creating user:', error);
    alert('Error creating user:');
  };

  const { mutate: addUser, isLoading } = useCreateNewUser(handleError, handleSuccess);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValues((values) => ({
      ...values,
      [target.name]: target.value
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser(values, {
      onSuccess: () => {
        setValues({
          userName: '',
          firstName: '',
          lastName: '',
          email: '',
          city: '',
          state: '',
          country: '',
          occupation: '',
        });
      },
    });
  };

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
                required={true}
              />
            </div>
            <div className="input-box">
              <CustomInput
                name='firstName'
                placeholder='First Name'
                type='text'
                value={values.firstName}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="input-box">
              <CustomInput
                name='lastName'
                placeholder='Last Name'
                type='text'
                value={values.lastName}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="input-box">
              <CustomInput
                name='email'
                placeholder='Enter your email address'
                type='email'
                value={values.email}
                onChange={handleChange}
                required={true}
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
              required={false}
            />
          </div>
          <div className="input-box">
            <CustomInput
              name='state'
              placeholder='Name of State'
              type='text'
              value={values.state}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className="input-box">
            <CustomInput
              name='country'
              placeholder='Name of Country'
              type='text'
              value={values.country}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className="input-box">
            <CustomInput
              name='occupation'
              placeholder='Name of Occupation'
              type='text'
              value={values.occupation}
              onChange={handleChange}
              required={false}
            />
          </div>
          </div>
        </div>
          <div className="buton-box">
            <button
              type='submit' 
              className='register-button'
              disabled={isLoading}
            >
              {isLoading? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </>
   );
}
 
export default Register;
import { ChangeEvent } from 'react';

export type FormInterface = {
  label?: string,
  type?: string,
  placeholder: string,
  name: string,
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  required: boolean,
  pattern?: string,
  errorMessage?: string,
}

type UserArray = {
  _id: string,
userName: string,
firstName: string,
lastName: string,
email: string,
occupation: string,
city: string,
state: string,
country: string,
createdAt: string,
updatedAt: string,
}

export type UserResponseInterface = {
  users: UserArray[],
}

export type UserInputInterface = {
  userName: string,
  firstName: string,
  lastName: string,
  email: string,
  occupation: string,
  city: string,
  state: string,
  country: string,
}

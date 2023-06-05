import { ChangeEvent } from 'react';

export type FormInterface = {
  label?: string,
  type?: string,
  placeholder: string,
  name: string,
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  pattern?: string,
  errorMessage?: string,
}

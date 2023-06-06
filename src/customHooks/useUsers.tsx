import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { UserInputInterface } from '../Interface';

const createUser = (values: UserInputInterface) => {
  return axios.post("http://localhost:5001/api/v1/users", values);
}

type CreateUserMutationOptions = UseMutationOptions<
  AxiosResponse<any, any>,
  unknown,
  UserInputInterface
>;

export const useCreateNewUser = (
  onError?: (error: any) => void,
  onSuccess?: (data: AxiosResponse<any, any>) => void,
): UseMutationResult<AxiosResponse<any, any>, unknown, UserInputInterface> => {
  return useMutation(createUser, {
    onError,
    onSuccess,
  });
}
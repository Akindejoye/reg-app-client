import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { UserInputInterface, UserResponseInterface } from '../Interface';

const createUser = (values: UserInputInterface) => {
  return axios.post("http://localhost:5001/api/v1/users", values);
}

const fetchAllUsers = () => {
  return axios.get<UserResponseInterface[]>("http://localhost:5001/api/v1/users");
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
export const useGetAllUsers = (onError?: (error: any) => void, onSuccess?: (data: AxiosResponse<any, any>) => void) => {
  return useQuery("user-details", fetchAllUsers, {
    onError,
    onSuccess
  });
};
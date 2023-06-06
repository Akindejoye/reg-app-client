import { useGetAllUsers } from "../../customHooks/useUsers";
import { UserArray } from "../../Interface";  

const UserDetails = () => {

  const handleSuccess = (data: any) => {
    console.log('Success:', data);
  };

  const handleError = (error: any) => {
    console.log('Error:', error);
  }

  const { data: usersInfo, isLoading, isError, error } = useGetAllUsers(
    handleError, handleSuccess
  )

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  console.log('Data loaded:', usersInfo)

  return ( 
    <>
      <div className="userdetails">
        <h1>User Details</h1>
        {usersInfo?.data?.users?.map((user: UserArray) => {
          return (
            <ul key={user._id}>
              <li>{user.firstName} {user.lastName} {user._id}</li>
            </ul>
          )
        })}
      </div>
    </>
   );
}
 
export default UserDetails;
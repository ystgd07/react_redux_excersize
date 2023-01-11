import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import useThunk from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";
const UserList = () => {
  const [doFechUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });
  console.log(data);
  useEffect(() => {
    doFechUsers();
  }, [doFechUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };
  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={1} className="w-full h-10"></Skeleton>;
  } else if (loadingUsersError) {
    content = <div>Error fetching data..</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user}></UsersListItem>;
    });

    if (loadingUsersError) {
      return <div>Error fetching data..</div>;
    }

    return (
      <div>
        <div className="flex flex-row justify-between m-3">
          <h1 className="m-2 text-xl">Users</h1>

          <Button loading={isCreatingUser} onClick={handleUserAdd}>
            +Add User
          </Button>

          {creatingUserError && "Error creating user.."}
        </div>
        {content}
      </div>
    );
  }
};

export default UserList;

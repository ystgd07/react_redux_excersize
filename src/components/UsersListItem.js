import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import useThunk from "../hooks/use-thunk";
import ExpandablePanel from "./Expandalbepanel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleClick = () => {
    doRemoveUser(user);
  };
  const header = (
    <>
      <div>
        <Button loading={isLoading} onClick={handleClick}>
          <GoTrashcan></GoTrashcan>
        </Button>
        <div>
          {error && <div>Error User</div>}
          {user.name}
        </div>
      </div>
    </>
  );
  return (
    <ExpandablePanel header={header}>
      Content!!
      <AlbumsList user={user}></AlbumsList>
    </ExpandablePanel>
  );
};

export default UsersListItem;

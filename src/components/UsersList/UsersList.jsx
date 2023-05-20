import { UserCard, UserList } from "./UsersList.styled";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/Api";
import { ButtonLoadMore } from "../ButtonLoadMore/ButtonLoadMore";
import UserListItem from "../UserListItem/UserListItem";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) {
      async function getAllUsers() {
        try {
          const response = await getUsers(page);
          console.log(response);
          setUsers(response);
        } catch (error) {
          console.log(error);
        }
      }
      getAllUsers();
    }
  }, [page]);

  useEffect(() => {
    if (page !== 1) {
      async function getAllUsers() {
        try {
          const response = await getUsers(page);
          if (response && response.length > 0) {
            console.log(response);
            setUsers((prev) => [...prev, ...response]);
          }
        } catch (error) {
          console.log(error);
        }
      }
      getAllUsers();
    }
  }, [page]);

  const loadMoreCards = () => {
    setPage((prev) => prev + 1);
    // setIsLoading(true);
  };

  const onButtonVisible = () => {
    if (users && users.length < Number(page * 3)) {
      return false;
    } else return true;
  };

  return (
    <section>
      <UserList>
        {users.map((user) => (
          <UserCard key={user.id}>
            <UserListItem user={user} />
          </UserCard>
        ))}
      </UserList>
      {onButtonVisible() && <ButtonLoadMore onClickButton={loadMoreCards} />}
    </section>
  );
};

export default UsersList;

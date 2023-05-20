import { UserCard, UserList } from "./UsersList.styled";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/Api";
import { ButtonLoadMore } from "../ButtonLoadMore/ButtonLoadMore";
import UserListItem from "../UserListItem/UserListItem";
import { Loader } from "../Loader/Loader";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);

  useEffect(() => {
    async function getAllUsers() {
      try {
        setIsLoading(true);
        setShowLoadMoreBtn(false);
        const response = await getUsers(page);
        setShowLoadMoreBtn(true);
        console.log(response);
        if (page === 1) {
          setUsers(response);
          setIsLoading(false);
        } else {
          setUsers((prev) => [...prev, ...response]);
          setIsLoading(false);
        }
        if (response.length === 0) {
          setShowLoadMoreBtn(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAllUsers();
  }, [page]);

  const loadMoreCards = () => {
    setPage((prev) => prev + 1);
    setIsLoading(true);
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
      {showLoadMoreBtn && <ButtonLoadMore onClickButton={loadMoreCards} />}
      {isLoading && <Loader />}
    </section>
  );
};

export default UsersList;

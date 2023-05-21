import { UserCard, UserList } from "./UsersList.styled";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/Api";
import { ButtonLoadMore } from "../ButtonLoadMore/ButtonLoadMore";
import UserListItem from "../UserListItem/UserListItem";
import { Loader } from "../Loader/Loader";
import ScrollToTop from "react-scroll-up";
import { TfiArrowCircleUp } from "react-icons/tfi";
import toast from "react-hot-toast";
import Select from "../Select/Select";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);

  const handleChange = (value) => {
    if (value === "Follow") {
      const findUsers = users.filter((user) => user.check === false);
      console.log(findUsers);
      setUsers(findUsers);
    }
    if (value === "Followings") {
      const findUsers = users.filter((user) => user.check === true);
      console.log(findUsers);
      setUsers(findUsers);
    }
  };

  useEffect(() => {
    async function getAllUsers() {
      try {
        setIsLoading(true);
        setShowLoadMoreBtn(false);
        const response = await getUsers(page);
        setShowLoadMoreBtn(true);

        if (page === 1) {
          setUsers(response);
          setIsLoading(false);
        } else {
          setUsers((prev) => [...prev, ...response]);
          setIsLoading(false);
        }
        if (response.length < 3) {
          setShowLoadMoreBtn(false);
          toast.success(`Tweets Cards are over`);
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
    <>
      <Select handleChange={handleChange} />
      <UserList>
        {users.map((user) => (
          <UserCard key={user.id}>
            <UserListItem user={user} />
          </UserCard>
        ))}
      </UserList>
      {showLoadMoreBtn && <ButtonLoadMore onClickButton={loadMoreCards} />}
      {isLoading && <Loader />}
      <ScrollToTop
        showUnder={160}
        style={{
          position: "fixed",
          color: "#D318FF",
          bottom: 50,
          right: 30,
          cursor: "pointer",
          transitionDuration: "0.2s",
          transitionTimingFunction: "linear",
          transitionDelay: "0s",
        }}
      >
        <span>
          <TfiArrowCircleUp size="50" />
        </span>
      </ScrollToTop>
    </>
  );
};

export default UsersList;

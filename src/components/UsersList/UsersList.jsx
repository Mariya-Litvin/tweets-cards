import {
  ButtonBack,
  UserCard,
  UserList,
  WrapperButtons,
} from "./UsersList.styled";
import { useEffect, useState } from "react";
import { getSelect, getUsers } from "../../api/Api";
import { ButtonLoadMore } from "../ButtonLoadMore/ButtonLoadMore";
import UserListItem from "../UserListItem/UserListItem";
import { Loader } from "../Loader/Loader";
import ScrollToTop from "react-scroll-up";
import { TfiArrowCircleUp } from "react-icons/tfi";
import toast from "react-hot-toast";
import Select from "../Select/Select";
import { HiArrowSmLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const [selectValue, setSelectValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function getAll() {
      const response = await getSelect(selectValue);
      console.log(response);
      setUsers(response);
      setShowLoadMoreBtn(false);
    }
    getAll();
  }, [selectValue, showLoadMoreBtn]);

  const handleChange = (value) => {
    const valueSelect = value;
    setSelectValue(valueSelect);
    console.log(valueSelect);
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
        toast.error("Sorry, something went wrong, please try again later");
        setIsLoading(false);
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
      <WrapperButtons>
        <ButtonBack onClick={() => navigate("/")}>
          <HiArrowSmLeft size="20" />
          Go back
        </ButtonBack>
        <Select handleChange={handleChange} />
      </WrapperButtons>
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

import {
  ButtonBack,
  UserCard,
  UserList,
  WrapperButtons,
} from "./UsersList.styled";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/Api";
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
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const [checkValue, setCheckValue] = useState("");
  const limit = 3;

  const navigate = useNavigate();

  const handleChange = (value) => {
    setCheckValue(value);
    setPageNumber(1);
  };

  useEffect(() => {
    async function getAllUsers() {
      try {
        setIsLoading(true);
        setShowLoadMoreBtn(false);

        const response = await getUsers({
          page: pageNumber,
          check: checkValue,
        });

        if (pageNumber === 1) {
          setIsLoading(false);
          setShowLoadMoreBtn(true);
          setUsers(response);
        }

        if (pageNumber > 1) {
          setIsLoading(false);
          setShowLoadMoreBtn(true);
          setUsers((prev) => [...prev, ...response]);
        }

        if (response.length < limit) {
          setShowLoadMoreBtn(false);
          setIsLoading(false);
          toast.success(`Tweets Cards are over`);
        }
      } catch (error) {
        toast.error("Sorry, something went wrong, please try again later");
        setIsLoading(false);
      }
    }
    getAllUsers();
  }, [pageNumber, checkValue]);

  const handleLoadMoreCards = () => {
    setPageNumber((prev) => prev + 1);
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
        {users.length > 0 &&
          users.map((user) => (
            <UserCard key={user.id}>
              <UserListItem user={user} />
            </UserCard>
          ))}
      </UserList>
      {showLoadMoreBtn && (
        <ButtonLoadMore onClickButton={handleLoadMoreCards} />
      )}
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

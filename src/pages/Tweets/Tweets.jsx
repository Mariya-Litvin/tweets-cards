import UsersList from "../../components/UsersList/UsersList";
import { ButtonBack } from "./Tweets.styled";
import { HiArrowSmLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Tweets = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section>
        <ButtonBack onClick={() => navigate("/")}>
          <HiArrowSmLeft size="20" />
          Go back
        </ButtonBack>
        <UsersList />
      </section>
    </main>
  );
};

export default Tweets;

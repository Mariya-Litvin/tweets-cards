import UsersList from "../../components/UsersList/UsersList";
import { ButtonBack, Section } from "./Tweets.styled";
import { HiArrowSmLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Tweets = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Section>
        <ButtonBack onClick={() => navigate("/")}>
          <HiArrowSmLeft size="20" />
          Go back
        </ButtonBack>
        <UsersList />
      </Section>
    </main>
  );
};

export default Tweets;

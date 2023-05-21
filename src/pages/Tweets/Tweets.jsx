import UsersList from "../../components/UsersList/UsersList";
import { ButtonBack, Section, WrapperButtons } from "./Tweets.styled";
import { HiArrowSmLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
// import Select from "../../components/Select/Select";

const Tweets = () => {
  const navigate = useNavigate();

  const handleTweets = () => {};
  return (
    <main>
      <Section>
        <WrapperButtons>
          <ButtonBack onClick={() => navigate("/")}>
            <HiArrowSmLeft size="20" />
            Go back
          </ButtonBack>
        </WrapperButtons>
        <UsersList tweets={handleTweets} />
      </Section>
    </main>
  );
};

export default Tweets;

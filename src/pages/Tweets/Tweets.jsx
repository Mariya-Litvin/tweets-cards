import UsersList from "../../components/UsersList/UsersList";
import { Section } from "./Tweets.styled";

const Tweets = () => {
  return (
    <main>
      <Section>
        <UsersList />
      </Section>
    </main>
  );
};

export default Tweets;

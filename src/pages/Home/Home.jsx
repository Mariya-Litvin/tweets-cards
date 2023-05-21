import { HomeImg, HomeText, Section } from "./Home.styled";
import logo from "../../images/logo.png";
const Home = () => {
  return (
    <main>
      <Section>
        <HomeImg src={logo} alt="logo" />
        <HomeText>Welcome to Tweets App!</HomeText>
      </Section>
    </main>
  );
};

export default Home;

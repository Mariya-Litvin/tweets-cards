import { HomeImg, HomeText } from "./Home.styled";
import logo from "../../images/logo.png";
const Home = () => {
  return (
    <>
      <HomeImg src={logo} alt="logo" />
      <HomeText>Welcome to the Tweets Cards App!</HomeText>
    </>
  );
};

export default Home;

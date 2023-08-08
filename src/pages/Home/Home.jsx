import { HomeImg, HomeText } from "./Home.styled";
import logo from "../../images/logo.png";
const Home = () => {
  return (
    <>
      <HomeImg width="350px" height="200px" src={logo} alt="logo" />
      <HomeText>Welcome to the Tweets Cards App!</HomeText>
    </>
  );
};

export default Home;

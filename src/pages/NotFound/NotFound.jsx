import { Link } from "react-router-dom";
import { NotFoundText } from "./NotFound.styled";

const NotFound = () => {
  return (
    <>
      <NotFoundText>
        Not found this page. Go to
        <Link to="/"> Home</Link>
      </NotFoundText>
    </>
  );
};

export default NotFound;

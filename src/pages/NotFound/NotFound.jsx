import { Link } from "react-router-dom";
import { NotFoundText, Section } from "./NotFound.styled";

const NotFound = () => {
  return (
    <main>
      <Section>
        <NotFoundText>
          Not found this page. Go to
          <Link to="/"> Home</Link>
        </NotFoundText>
      </Section>
    </main>
  );
};

export default NotFound;

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <div>
        <h1>
          Not found this page. Go to
          <Link to="/"> Home</Link>
        </h1>
      </div>
    </main>
  );
};

export default NotFound;

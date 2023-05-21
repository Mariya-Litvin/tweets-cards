import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Header, LinkActive } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <LinkActive to="/">Home</LinkActive>
          <LinkActive to="/tweets">Tweets</LinkActive>
        </nav>
      </Header>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

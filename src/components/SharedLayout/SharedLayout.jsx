import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Header, LinkActive } from "./SharedLayout.styled";
import { Toaster } from "react-hot-toast";

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
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default SharedLayout;

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Header, LinkActive, Section } from "./SharedLayout.styled";
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
          <div style={{ display: "flex", margin: "0 auto" }}>
            <Loader />
          </div>
        }
      >
        <main>
          <Section>
            <Outlet />
          </Section>
        </main>
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default SharedLayout;

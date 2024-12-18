import React from "react";
import { Container, SideBar, Spinner } from "../components";
import { Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div className="w-full mx-auto">
      <Container>
        <SideBar />
      </Container>
    </div>
  );
};

export default Account;

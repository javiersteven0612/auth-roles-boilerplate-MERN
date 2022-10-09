import React from "react";
import { Outlet } from "react-router-dom";
import DashLayoutFooter from "./DashLayoutFooter";
import DashLayoutHeader from "./DashLayoutHeader";
import { useRecoilValue } from "recoil";
import { AccessToken } from "../recoil/atom";

export default function DashLayout() {
  // const [accessToken, setAccessToken] = useRecoilState(AccessToken);
  const accessToken = useRecoilValue(AccessToken);
  return (
    <>
      <DashLayoutHeader />
      <div>Dash</div>
      <p>accessToken: {accessToken}</p>
      <p>Current server: {process.env.REACT_APP_BASEURL}</p>
      <Outlet />
      <DashLayoutFooter />
    </>
  );
}

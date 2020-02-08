import React from "react";
import "../Menu/Menu.css";
import BannerReusable from "../../components/BannerReusable/BannerReuseable";
import RowMenuBtn from "../../components/RowMenuBtn/RowMenuBtn";
import MenuImg from "../../components/MenuImg/MenuImg";
import PageUtility from "../../components/PageUtility/PageUtility";

let Menu = () => {
  return (
    <>
      <BannerReusable text="Our Menu" />
      <RowMenuBtn />
      <MenuImg />
      <PageUtility />
    </>
  );
};

export default Menu;
import React from "react";
import BannerReusable from "../../components/BannerReusable/BannerReuseable";
import ProgramsImage from "../../components/ProgramsImage/ProgramsImage";
import ProgImg from "../../assets/images/Nut_Program.png";
import TenDay from "../../assets/images/10day.png";
import WC from "../../assets/images/WC.png";

let Programs = () => {
  return (
    <>
      <BannerReusable text="Our Nutritional Program" />
      <ProgramsImage text="message" progImg={ProgImg} />
      <ProgramsImage
        text="message"
        progImg={WC}
        style={{ marginTop: "-1em" }}
      />
      <ProgramsImage
        text="message"
        progImg={TenDay}
        style={{ marginTop: "-3.2em", marginBottom: "2.5em" }}
      />
    </>
  );
};

export default Programs;

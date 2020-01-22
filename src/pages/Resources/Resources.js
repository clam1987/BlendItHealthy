import React, { useState, useEffect } from "react";
import "../Resources/Resources.css";
import BannerReusable from "../../components/BannerReusable/BannerReuseable";
import CardList from "../../components/CardList/CardList";
import Button from "../../components/Button/Button";
// import greenJuice from "../../assets/images/green_Juice.jpg"
// import honey from "../../assets/images/honey.jpg"
// import pills from "../../assets/images/pills.png"

let Resources = () => {
  return (
    <>
      <BannerReusable
        style={{ backgroundColor: "#37CDB8" }}
        text={"Our Resources"}
      />
      <CardList
        title={[
          "BLENDING VS JUICING",
          "WHY WE OFFER HONEY, NOT SUGAR!",
          "IS IT BETTER TO GET VITAMINS FROM FOOD OR SUPPLEMENTS"
        ]}
        p1={[
          "Which is better: juicing or blending? Does one offer more health benefits than the other?",
          "What are their differences? Is honey better then sugar?",
          "Are natural vitamins better than synthetic vitamins?"
        ]}
        cardImg={["green_Juice.jpg", "honey.jpg", "pills.png"]}
        links={["https://www.foodmatters.com/articles-1/juicing-vs-blending-which-one-is-better","https://www.benefits-of-honey.com/honey-vs-sugar.html","https://www.health.harvard.edu/newsweek/Listing_of_vitamins.htm"]}
      />
      <Button text="SEE MORE" />
    </>
  );
};

export default Resources;

import React, { useState, useEffect } from "react";
import "../Ingredients/Ingredients.css";
import BannerReuseable from "../../components/BannerReusable/BannerReuseable";

let Ingredients = () => {
  return (
    <>
      <BannerReuseable
        text="Our Ingredients"
        style={{ backgroundColor: "#2e7d39" }}
      />
      <br />
      <NavPagination />
      <h1>This is Ingredients</h1>
    </>
  );
};

export default Ingredients;

let NavPagination = () => {
  let [page, setPage] = useState({
    pageNumber: 1
  });
  return (
    <nav aria-label="Page Navigation example">
      <ul className="pagination justify-content-center pagination-lg">
        <li className="page-item">
          <a className="page-link" href="#">
            {"<"}Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next>
          </a>
        </li>
      </ul>
    </nav>
  );
};

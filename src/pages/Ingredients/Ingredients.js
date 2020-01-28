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
    items: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    currentPage: 1,
    itemsPerPage: 9,
  });

  let handleClick = (e) => {
    setPage({...page, currentPage: e.target.id})
  }

  let {items, currentPage, itemsPerPage} = page
  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Render items
  const renderItems = currentItems.map((item, i) => {
  return <li key={i}>{item}</li>
  })

  // Logic for displaying Page #
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumber.push(i);
  }
  
  // Logic for rendering Page #
  const renderPageNumber = pageNumber.map(number => {
    return (
    <li key={number} id={number}>{number}</li>
    )
  })


  return (
    <nav aria-label="Page Navigation example">
      <ul className="pagination justify-content-center pagination-lg" id="page-numbers" onClick={handleClick}>
        {renderPageNumber}
      </ul>
      <ul className="pagination justify-content-center pagination-lg">
        {renderItems}
      </ul>
    </nav>
  );
};

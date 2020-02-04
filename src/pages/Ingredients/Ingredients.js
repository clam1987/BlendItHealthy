import React, { useState, useEffect } from "react";
import "../Ingredients/Ingredients.css";
import BannerReuseable from "../../components/BannerReusable/BannerReuseable";
import Pagination from "react-paginating";
import ListCardLeft from "../../components/ListCardLeft/ListCardLeft";
import fruits from "../../assets/Ingredients.json";
console.log(fruits);

let Ingredients = () => {
  const [page, setPage] = useState({
    currentPage: 1
  });

  const length = fruits.length;
  const limit = Math.ceil(9);
  const pageCount = 3;
  const total = length * limit;

  let handlePageChange = page => {
    setPage({ currentPage: page });
  };

  const { currentPage } = page;

  let newFruits = fruits[currentPage - 1].map(fruit => (
    <ListCardLeft
      key={fruit.name}
      description={fruit.description}
      link={fruit.link}
      name={fruit.name}
      img={require("../../assets/images/" + fruit.image)}
      color={fruit.color}
      textColor={fruit.textColor}
      descripColor={fruit.descripColor}
      uid={fruit.uid}
      desc={fruit.id2}
      id2={fruit.iName}
    />
  ));

  return (
    <>
      <BannerReuseable
        text="Our Ingredients"
        style={{ backgroundColor: "#2e7d39" }}
      />
      <br />

      <Pagination
        total={total}
        limit={limit}
        pageCount={pageCount}
        currentPage={currentPage}
      >
        {({
          pages,
          currentPage,
          hasNextPage,
          hasPreviousPage,
          previousPage,
          nextPage,
          totalPages,
          getPageItemProps
        }) => (
          <div>
            <button
              {...getPageItemProps({
                pageValue: 1,
                onPageChange: handlePageChange
              })}
              style={{
                backgroundColor: "white",
                border: "none",
                color: "#4CAF50",
                padding: "5px 16px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "18px",
                margin: "4px 2px",
                cursor: "pointer",
                fontFamily: "Poppins"
              }}
            >
              First
            </button>

            {hasPreviousPage && (
              <button
                {...getPageItemProps({
                  pageValue: previousPage,
                  onPageChange: handlePageChange
                })}
                style={{
                  backgroundColor: "white",
                  border: "none",
                  color: "#4CAF50",
                  padding: "5px 16px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "18px",
                  margin: "4px 2px",
                  cursor: "pointer",
                  fontFamily: "Poppins"
                }}
              >
                {"< Previous"}
              </button>
            )}

            {pages.map(page => {
              let activePage = null;
              if (currentPage === page) {
                activePage = { backgroundColor: "#2E7D39" };
              }
              return (
                <button
                  {...getPageItemProps({
                    pageValue: page,
                    key: page,
                    style: activePage,
                    onPageChange: handlePageChange
                  })}
                  style={{
                    backgroundColor: currentPage === page ? "#2E7D39" : "white",
                    border: "1px solid #2E7D39",
                    color: currentPage === page ? "white" : "#2E7D39",
                    padding: "5px 16px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "18px",
                    margin: "4px 2px",
                    cursor: "pointer",
                    borderRadius: "20%"
                    // fontFamily: "Poppins",
                  }}
                >
                  {page}
                </button>
              );
            })}

            {hasNextPage && (
              <button
                {...getPageItemProps({
                  pageValue: nextPage,
                  onPageChange: handlePageChange
                })}
                style={{
                  backgroundColor: "white",
                  border: "none",
                  color: "#4CAF50",
                  padding: "5px 16px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "18px",
                  margin: "4px 2px",
                  cursor: "pointer",
                  fontFamily: "Poppins"
                }}
              >
                {"Next >"}
              </button>
            )}

            <button
              {...getPageItemProps({
                pageValue: totalPages,
                onPageChange: handlePageChange
              })}
              style={{
                backgroundColor: "white",
                border: "none",
                color: "#4CAF50",
                padding: "5px 16px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "18px",
                margin: "4px 2px",
                cursor: "pointer",
                fontFamily: "Poppins"
              }}
            >
              Last
            </button>
          </div>
        )}
      </Pagination>
      <ul id="listContainer">{newFruits}</ul>
    </>
  );
};

export default Ingredients;

import React, { useState, useEffect } from "react";
import "../Ingredients/Ingredients.css";
import BannerReuseable from "../../components/BannerReusable/BannerReuseable";
import Pagination from "react-paginating";


let Ingredients = () => {
  const [page, setPage] = useState({
    currentPage: 1
  })
  const items=[["a","b","c","d","e","f","g","h","i","j"],["k","l","m","n","o","p","q","r","s","t"],["u","v","w","x","y","z"]]
  const length = items.length
  const limit = Math.ceil(9)
  const pageCount = length / limit;
  const total = length * limit

  let handlePageChange = (page, e) => {
    setPage({currentPage: page})
  }

  const { currentPage } = page;

  // let newItems = items.map(item => {
  //   return <li key={item}>{item}</li>
  // })
  return (
    <>
      <BannerReuseable
        text="Our Ingredients"
        style={{ backgroundColor: "#2e7d39" }}
      />
      <br />
      {/* <NavPagination items={["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]}/> */}

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
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: handlePageChange
                  })}
                >
                  {"<"}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: "#fdce09" };
                }
                return (
                  <button
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: handlePageChange
                    })}
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
                >
                  {">"}
                </button>
              )}

              <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Pagination>
        <ul className="pagination justify-content-center pagination-lg" id="page-numbers">
        {items[currentPage - 1].map(item => {
        return <li key={item}>{item}</li>
        })}
      </ul>
      <h1>This is Ingredients</h1>
    </>
  );
};

export default Ingredients;

// let NavPagination = (props) => {

//   let [page, setPage] = useState({
//     items: props.items,
//     currentPage: 1,
//     itemsPerPage: 9,
//   });

//   let handleClick = (e) => {
//     setPage({...page, currentPage: e.target.id})
//   }

//   let {items, currentPage, itemsPerPage} = page
//   // Logic for pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   // Render items
//   const renderItems = currentItems.map((item, i) => {
//   return <li key={i}>{item}</li>
//   })

//   // Logic for displaying Page #
//   const pageNumber = [];
//   for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
//     pageNumber.push(i);
//   }
  
//   // Logic for rendering Page #
//   const renderPageNumber = pageNumber.map(number => {
//     return (
//     <li key={number} id={number}>{number}</li>
//     )
//   })

//   let increment = () => {
//     if(page.currentPage <= Math.ceil(page.items.length/page.itemsPerPage)) {
//       setPage({...page, currentPage: page.currentPage ++})
//       return renderItems, console.log(page);
//     }
//   }



//   let decrement = () => {
//     if(page.currentPage >= Math.ceil(page.items.length/page.itemsPerPage)) {
//       console.log("deced")
//       setPage({...page, currentPage: page.currentPage --})
//       console.log(page)
//     }
//   }


//   return (
//     <nav aria-label="Page Navigation example">
//       <ul className="pagination justify-content-center pagination-lg" id="page-numbers" onClick={handleClick}>
//     <li className="page-arrow" onClick={decrement}>{"<"}</li>
//         {renderPageNumber}
//     <li className="page-arrow" onClick={increment}>></li>
//       </ul>
//       <ul className="pagination justify-content-center pagination-lg">
//         {renderItems}
//       </ul>
//     </nav>
//   );
// };

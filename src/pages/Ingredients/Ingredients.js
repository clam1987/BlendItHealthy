import React, { useState, useEffect } from "react";
import "../Ingredients/Ingredients.css";
import BannerReuseable from "../../components/BannerReusable/BannerReuseable";
import Pagination from "react-paginating";


let Ingredients = () => {
  const [page, setPage] = useState({
    currentPage: 1
  })
  const fruits = [
    [{
     name: "Apple",
     description: "Antioxidant\n Cardiovascular Benefits\n Blood Sugar Regulation",
     link: "https://www.medicalnewstoday.com/articles/267290.php#benefits",
    },
    {
      name: "Avocada",
      description: "Anti-Inflammatory\n Promote Heart Healthy\n Anti-Cancer Benefits",
      link: "https://www.medicalnewstoday.com/articles/318620.php#nutrition",
    },
    {
      name: "Banana",
      description: "Protect Eyesight\n Prevent High Blood Pressure\n Best Source of Potassium",
      link: "https://www.medicalnewstoday.com/articles/271157.php#nutrition",
    },
    {
      name: "Beets",
      description: "Antioxidants\n Detoxification\n Anti-Inflammatory",
      link: "https://www.medicalnewstoday.com/articles/277432.php",
    },
    {
      name: "Blackberry",
      description: "Vitamin E\n Antioxidants\n Vitamin C",
      link: "https://www.healthline.com/nutrition/11-reasons-to-eat-berries#section1",
    },
    {
      name: "Blueberry",
      description: "Cardiovascular Benefits\n Anti-Cancer Benefits\n Supports Vision Health",
      link: "https://www.medicalnewstoday.com/articles/287710.php#benefits",
    },
    {
      name: "Cantaloupe",
      description: "Anti-Inflammatory\n Antioxidants\n Vitamin A",
      link: "https://www.medicalnewstoday.com/articles/279176.php",
    },
    {
      name: "Carrot",
      description: "Vision Health\n Antioxidants\n Anti-Cancer Benefits",
      link: "https://www.medicalnewstoday.com/articles/270191.php",
    },
    {
      name: "Celery",
      description: "Anti-Inflammatory\n Digestive Support\n Cardiovascular Support",
      link: "https://www.medicalnewstoday.com/articles/270678.php#benefits",
    }],
    [
      {
        name: "Cucumber",
        description: "Manganese\n Vitamin C\n Antioxidants",
        link: "https://www.medicalnewstoday.com/articles/283006.php",
      },
      {
        name: "Grape",
        description: "Antioxidants\n Cardiovascular Benefits\n Anti-Cancer Benefits",
        link: "https://www.medicalnewstoday.com/articles/271156.php",
      },
      {
        name: "Honeydew",
        description: "Vitamin B-6\n Vitamin C\n Best Sources of Potassium",
        link: "https://www.medicalnewstoday.com/articles/271156.php",
      },
      {
        name: "",
        description: "",
        link: "",
      },
      {
        name: "",
        description: "",
        link: "",
      },
      {
        name: "",
        description: "",
        link: "",
      },
      {
        name: "",
        description: "",
        link: "",
      },
      {
        name: "",
        description: "",
        link: "",
      },
      {
        name: "",
        description: "",
        link: "",
      },
    ],
    [
      {
        
      }
    ]
  ]
  // const length = items.length
  // console.log(items[0].data.length)
  // const limit = Math.ceil(9)
  // const limit = 9
  // const pageCount = length / limit;
  // const pageCount = 3
  // const total = length * limit

  
  // const fruits = [
  //   ['apple', 'orange'],
  //   ['banana', 'avocado'],
  //   ['coconut', 'blueberry'],
  //   ['payaya', 'peach'],
  //   ['pear', 'plum']
  // ];
  const limit = 2;
  const pageCount = 5;
  const total = fruits.length * limit;



  let handlePageChange = (page) => {
    setPage({currentPage: page})
  }

  const { currentPage } = page;

  
  // let newItems = items[0].data.map(item => {
  //   console.log(item)
  //   return <li key={item.id}>{item.name}</li>
  // })
  return (
    <>
      <BannerReuseable
        text="Our Ingredients"
        style={{ backgroundColor: "#2e7d39" }}
        />
      <br />
      <ul>
        {/* {fruits[currentPage - 1].map(item => <li key={item}>{item}</li>)} */}
        {/* {fruits[currentPage - 1].map(item => <ListCardLeft key={item} description={item}/>)} */}
        </ul>
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
                  {'<'}
                </button>
              )}
 
              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: '#fdce09' };
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
                  {'>'}
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

      <h1>This is Ingredients</h1>
    </>
  );
};

export default Ingredients;

let ListCardLeft = (props) => {
  return (
  <li key={props.key}>
    <div className="row">
      <div className="col-sm-4">
        Apple Image
      </div>
      <div className="col-sm-4">
        {props.description}
      </div>
      <div className="col-sm-4">
        <a href={props.link}>Read More >></a>
      </div>
    </div>
  </li>
  )
}

      // <Pagination
      //     total={total}
      //     limit={limit}
      //     pageCount={pageCount}
      //     currentPage={currentPage}
      //   >
      //     {({
      //       pages,
      //       currentPage,
      //       hasNextPage,
      //       hasPreviousPage,
      //       previousPage,
      //       nextPage,
      //       totalPages,
      //       getPageItemProps
      //     }) => (
      //       <div>
      //         <button
      //           {...getPageItemProps({
      //             pageValue: 1,
      //             onPageChange: handlePageChange
      //           })}
      //         >
      //           first
      //         </button>

      //         {hasPreviousPage && (
      //           <button
      //             {...getPageItemProps({
      //               pageValue: previousPage,
      //               onPageChange: handlePageChange
      //             })}
      //           >
      //             {"<"}
      //           </button>
      //         )}

      //         {pages.map(page => {
      //           let activePage = null;
      //           if (currentPage === page) {
      //             activePage = { backgroundColor: "#fdce09" };
      //           }
      //           return (
      //             <button
      //               {...getPageItemProps({
      //                 pageValue: page,
      //                 key: page,
      //                 style: activePage,
      //                 onPageChange: handlePageChange
      //               })}
      //             >
      //               {page}
      //             </button>
      //           );
      //         })}

      //         {hasNextPage && (
      //           <button
      //             {...getPageItemProps({
      //               pageValue: nextPage,
      //               onPageChange: handlePageChange
      //             })}
      //           >
      //             {">"}
      //           </button>
      //         )}

      //         <button
      //           {...getPageItemProps({
      //             pageValue: totalPages,
      //             onPageChange: handlePageChange
      //           })}
      //         >
      //           last
      //         </button>
      //       </div>
      //     )}
      //   </Pagination>
      //   <ul className="pagination justify-content-center pagination-lg" id="page-numbers">
      //   {items[currentPage - 1].map(item => {
      //   return <li key={item}>{item}</li>
      //   })}
      // </ul>
{/* <NavPagination items={["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]}/> */}
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

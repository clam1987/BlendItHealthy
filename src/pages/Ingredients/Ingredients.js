import React, { useState, useEffect } from "react";
import "../Ingredients/Ingredients.css";
import BannerReuseable from "../../components/BannerReusable/BannerReuseable";
import Pagination from "react-paginating";

let Ingredients = () => {
  const [page, setPage] = useState({
    currentPage: 1
  });
  const fruits = [
    [
      {
        name: "Apple",
        description:
          "Antioxidant\n Cardiovascular Benefits\n Blood Sugar Regulation",
        link: "https://www.medicalnewstoday.com/articles/267290.php#benefits",
        image: "apple.jpg"
      },
      {
        name: "Avocada",
        description:
          "Anti-Inflammatory\n Promote Heart Healthy\n Anti-Cancer Benefits",
        link: "https://www.medicalnewstoday.com/articles/318620.php#nutrition",
        image: "avocado.jpg"
      },
      {
        name: "Banana",
        description:
          "Protect Eyesight\n Prevent High Blood Pressure\n Best Source of Potassium",
        link: "https://www.medicalnewstoday.com/articles/271157.php#nutrition",
        image: "banana.jpg"
      },
      {
        name: "Beets",
        description: "Antioxidants\n Detoxification\n Anti-Inflammatory",
        link: "https://www.medicalnewstoday.com/articles/277432.php",
        image: "beet.jpg"
      },
      {
        name: "Blackberry",
        description: "Vitamin E\n Antioxidants\n Vitamin C",
        link:
          "https://www.healthline.com/nutrition/11-reasons-to-eat-berries#section1",
        image: "blackberry.jpg"
      },
      {
        name: "Blueberry",
        description:
          "Cardiovascular Benefits\n Anti-Cancer Benefits\n Supports Vision Health",
        link: "https://www.medicalnewstoday.com/articles/287710.php#benefits",
        image: "blueberry.jpg"
      },
      {
        name: "Cantaloupe",
        description: "Anti-Inflammatory\n Antioxidants\n Vitamin A",
        link: "https://www.medicalnewstoday.com/articles/279176.php",
        image: "cantaloupe.jpg"
      },
      {
        name: "Carrot",
        description: "Vision Health\n Antioxidants\n Anti-Cancer Benefits",
        link: "https://www.medicalnewstoday.com/articles/270191.php",
        image: "carrot.jpg"
      },
      {
        name: "Celery",
        description:
          "Anti-Inflammatory\n Digestive Support\n Cardiovascular Support",
        link: "https://www.medicalnewstoday.com/articles/270678.php#benefits",
        image:"celery.jpg"
      }
    ],
    [
      {
        name: "Cucumber",
        description: "Manganese\n Vitamin C\n Antioxidants",
        link: "https://www.medicalnewstoday.com/articles/283006.php",
      },
      {
        name: "Grape",
        description:
          "Antioxidants\n Cardiovascular Benefits\n Anti-Cancer Benefits",
        link: "https://www.medicalnewstoday.com/articles/271156.php"
      },
      {
        name: "Honeydew",
        description: "Vitamin B-6\n Vitamin C\n Best Sources of Potassium",
        link: "https://www.medicalnewstoday.com/articles/271156.php"
      },
      {
        name: "Kale",
        description:
          "Antioxidants\n Digestive Support\n Cardiovascular Benefits",
        link: "https://www.medicalnewstoday.com/articles/270435.php"
      },
      {
        name: "Mango",
        description: "Digestive Support\n Boosts Immune System\n Vision Health",
        link: "https://www.medicalnewstoday.com/articles/275921.php"
      },
      {
        name: "Orange",
        description:
          "Cardiovascular Benefits\n Anti-Cancer Benefits\n Supports Vision Health",
        link: "https://www.medicalnewstoday.com/articles/272782.php"
      },
      {
        name: "Papaya",
        description: "Digestive Suppoprt\n Anti-Cancer Benefits\n Vitamin C",
        link: "https://www.medicalnewstoday.com/articles/275517.php"
      },
      {
        name: "Peach",
        description: "Manganese\n Vitamin C\n Antioxidants",
        link: "https://www.medicalnewstoday.com/articles/274620.php"
      },
      {
        name: "Persimmon",
        description: "Best Source of Fiber\n Vitamin C\n Skin Health",
        link:
          "https://www.healthline.com/nutrition/persimmon-nutrition-benefits"
      }
    ],
    [
      {
        name: "Pineapple",
        description: "Vitamin C\n Boosts Immune System\n Antioxidents",
        link: "https://www.medicalnewstoday.com/articles/276903.php"
      },
      {
        name: "Plum",
        description: "Best Source of Potassium\n Vitamin C\n Vitamin K",
        link: "https://www.webmd.com/food-recipes/benefits-plums#1"
      },
      {
        name: "Pomegranate",
        description:
          "Best Source of Fiber \n Vitamin C\n Best Source of Potassium",
        link: "https://www.medicalnewstoday.com/articles/318385.php"
      },
      {
        name: "Raspberry",
        description:
          "Blood Sugar Regulation\n Antioxidents\n Best Source of Potassium",
        link: "https://www.medicalnewstoday.com/articles/283018.php"
      },
      {
        name: "Spinach",
        description: "Anti-Cancer Benefits\n Manganese\n Vitamin E",
        link: "https://www.medicalnewstoday.com/articles/270609.php"
      },
      {
        name: "Strawberry",
        description:
          "Cardiovascular Benefits\n Regulates Blood Sugar\n Anti-Cancer Benefits",
        link: "https://www.medicalnewstoday.com/articles/271285.php"
      },
      {
        name: "Watermelon",
        description: "Anti-Inflammatory\n Antioxidants\n Regulates Blood Flow",
        link: "https://www.medicalnewstoday.com/articles/266886.php"
      }
    ]
  ];
  const length = fruits.length;
  // console.log(fruits.length);
  const limit = Math.ceil(9);
  // const limit = 9
  // const pageCount = length / limit;
  const pageCount = 3;
  const total = length * limit;

  // const fruits = [
  //   ['apple', 'orange'],
  //   ['banana', 'avocado'],
  //   ['coconut', 'blueberry'],
  //   ['payaya', 'peach'],
  //   ['pear', 'plum']
  // ];
  // const limit = 2;
  // const pageCount = 5;
  // const total = fruits.length * limit;

  let handlePageChange = page => {
    setPage({ currentPage: page });
  };

  const { currentPage } = page;

  let newFruits = fruits[currentPage - 1].map(fruit => (
    // console.log(fruit.image),
    <ListCardLeft
      key={fruit.name}
      description={fruit.description}
      link={fruit.link}
      name={fruit.name}
      // img={require("../../assets/images/" + fruit.image)}
    />
  ));
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
        {newFruits}
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

      <h1>This is Ingredients</h1>
    </>
  );
};

export default Ingredients;

let ListCardLeft = props => {
  return (
    <li>
      <div className="row fruitsRow">
        <div className="col-sm-2">
          <img src={props.img} alt={props.name} className="fruitsCollection" id={props.fruitName}/>
        </div>
        <div className="col-sm-2">{props.name}</div>
        <div className="col-sm-4">{props.description}</div>
        <div className="col-sm-4">
          <a href={props.link}>Read More >></a>
        </div>
      </div>
    </li>
  );
};

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
{
  /* <NavPagination items={["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]}/> */
}
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

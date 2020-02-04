import React, { useState, useEffect } from "react";
import "../Ingredients/Ingredients.css";
import BannerReuseable from "../../components/BannerReusable/BannerReuseable";
import Pagination from "react-paginating";
import ListCardLeft from "../../components/ListCardLeft/ListCardLeft"

let Ingredients = () => {
  const [page, setPage] = useState({
    currentPage: 1
  });
  const fruits = [
    [
      {
        uid: "fruit1",
        id2: "desc1",
        iName: "name1",
        name: "Apple",
        description:
          "Antioxidant\n Cardiovascular Benefits\n Blood Sugar Regulation",
        link: "https://www.medicalnewstoday.com/articles/267290.php#benefits",
        image: "apple.jpg",
        color: "#BA110B 5px solid",
        textColor: "#BA110B",
        descripColor: "#E0635E"
      },
      {
        uid: "fruit2",
        id2: "desc2",
        iName: "name2",
        name: "Avocado",
        description:
          "Anti-Inflammatory\n Promote Heart Healthy\n Anti-Cancer Benefits",
        link: "https://www.medicalnewstoday.com/articles/318620.php#nutrition",
        image: "avocado.jpg",
        color: "#3A813A 5px solid",
        textColor: "#3A813A",
        descripColor: "#79B579"
      },
      {
        uid: "fruit3",
        id2: "desc3",
        iName: "name3",
        name: "Banana",
        description:
          "Protect Eyesight\n Prevent High Blood Pressure\n Best Source of Potassium",
        link: "https://www.medicalnewstoday.com/articles/271157.php#nutrition",
        image: "banana.jpg",
        color: "#F6DD38 5px solid",
        textColor: "#F6DD38",
        descripColor: "#FFBE53"
      },
      {
        uid: "fruit4",
        id2: "desc4",
        iName: "name4",
        name: "Beets",
        description: "Antioxidants\n Detoxification\n Anti-Inflammatory",
        link: "https://www.medicalnewstoday.com/articles/277432.php",
        image: "beet.jpg",
        color: "#81272A 5px solid",
        textColor: "#81272A",
        descripColor: "#C04E52"
      },
      {
        uid: "fruit5",
        id2: "desc5",
        iName: "name5",
        name: "Blackberry",
        description: "Vitamin E\n Antioxidants\n Vitamin C",
        link:
          "https://www.healthline.com/nutrition/11-reasons-to-eat-berries#section1",
        image: "blackberry.jpg",
        color: "#000000 5px solid",
        textColor: "#000000",
        descripColor: "#6C6C6C"
      },
      {
        uid: "fruit6",
        id2: "desc6",
        iName: "name6",
        name: "Blueberry",
        description:
          "Cardiovascular Benefits\n Anti-Cancer Benefits\n Supports Vision Health",
        link: "https://www.medicalnewstoday.com/articles/287710.php#benefits",
        image: "blueberry.jpg",
        color: "#67749E 5px solid",
        textColor: "#67749E",
        descripColor: "#8A9ACB"
      },
      {
        uid: "fruit7",
        id2: "desc7",
        iName: "name7",
        name: "Cantaloupe",
        description: "Anti-Inflammatory\n Antioxidants\n Vitamin A",
        link: "https://www.medicalnewstoday.com/articles/279176.php",
        image: "cantaloupe.jpg",
        color: "#FEB151 5px solid",
        textColor: "#FEB151",
        descripColor: "#F0BE80"
      },
      {
        uid: "fruit8",
        id2: "desc8",
        iName: "name8",
        name: "Carrot",
        description: "Vision Health\n Antioxidants\n Anti-Cancer Benefits",
        link: "https://www.medicalnewstoday.com/articles/270191.php",
        image: "carrot.jpg",
        color: "#F99349 5px solid",
        textColor: "#F99349",
        descripColor: "#FFA563"
      },
      {
        uid: "fruit9",
        id2: "desc9",
        iName: "name9",
        name: "Celery",
        description:
          "Anti-Inflammatory\n Digestive Support\n Cardiovascular Support",
        link: "https://www.medicalnewstoday.com/articles/270678.php#benefits",
        image:"celery.jpg",
        color: "#99BF1E 5px solid",
        textColor: "#99BF1E",
        descripColor: "#AECF45"
      }
    ],
    [
      {
        uid: "fruit10",
        id2: "desc10",
        iName: "name10",
        name: "Cucumber",
        description: "Manganese\n Vitamin C\n Antioxidants",
        link: "https://www.medicalnewstoday.com/articles/283006.php",
        image:"cucumber.jpg",
        color: "#7AB36B 5px solid",
        textColor: "#7AB36B",
        descripColor: "#91BA86"
      },
      {
        uid: "fruit11",
        id2: "desc11",
        iName: "name11",
        name: "Grape",
        description:
          "Antioxidants\n Cardiovascular Benefits\n Anti-Cancer Benefits",
        link: "https://www.medicalnewstoday.com/articles/271156.php",
        image:"grapes.png",
        color: "#8D0086 5px solid",
        textColor: "#8D0086",
        descripColor: "#D073CC"
      },
      {
        uid: "fruit12",
        id2: "desc12",
        iName: "name12",
        name: "Honeydew",
        description: "Vitamin B-6\n Vitamin C\n Best Sources of Potassium",
        link: "https://www.medicalnewstoday.com/articles/271156.php",
        image:"honeydew.jpg",
        color: "#95CD8E 5px solid",
        textColor: "#95CD8E",
        descripColor: "#99D292"
      },
      {
        uid: "fruit13",
        id2: "desc13",
        iName: "name13",
        name: "Kale",
        description:
          "Antioxidants\n Digestive Support\n Cardiovascular Benefits",
        link: "https://www.medicalnewstoday.com/articles/270435.php",
        image:"kale.jpg",
        color: "#404C35 5px solid",
        textColor: "#404C35",
        descripColor: "#90AE75"
      },
      {
        uid: "fruit14",
        id2: "desc14",
        iName: "name14",
        name: "Mango",
        description: "Digestive Support\n Boosts Immune System\n Vision Health",
        link: "https://www.medicalnewstoday.com/articles/275921.php",
        image:"mango.jpg",
        color: "#F9B700 5px solid",
        textColor: "#F9B700",
        descripColor: "#FFC421"
      },
      {
        uid: "fruit15",
        id2: "desc15",
        iName: "name15",
        name: "Orange",
        description:
          "Cardiovascular Benefits\n Anti-Cancer Benefits\n Supports Vision Health",
        link: "https://www.medicalnewstoday.com/articles/272782.php",
        image:"orange.jpg",
        color: "#FF8116 5px solid",
        textColor: "#FF8116",
        descripColor: "#FF9E4B"
      },
      {
        uid: "fruit16",
        id2: "desc16",
        iName: "name16",
        name: "Papaya",
        description: "Digestive Suppoprt\n Anti-Cancer Benefits\n Vitamin C",
        link: "https://www.medicalnewstoday.com/articles/275517.php",
        image:"papaya.jpg",
        color: "#F57005 5px solid",
        textColor: "#F57005",
        descripColor: "#F57610"
      },
      {
        uid: "fruit17",
        id2: "desc17",
        iName: "name17",
        name: "Peach",
        description: "Manganese\n Vitamin C\n Antioxidants",
        link: "https://www.medicalnewstoday.com/articles/274620.php",
        image:"peach.jpg",
        color: "#F3625D 5px solid",
        textColor: "#F3625D",
        descripColor: "#FF918D"
      },
      {
        uid: "fruit18",
        id2: "desc18",
        iName: "name18",
        name: "Persimmon",
        description: "Best Source of Fiber\n Vitamin C\n Skin Health",
        link:
          "https://www.healthline.com/nutrition/persimmon-nutrition-benefits",
          image:"persimmon.jpg",
          color: "#FF7A12 5px solid",
          textColor: "#FF7A12",
          descripColor: "#FF9C4F"
      }
    ],
    [
      {
        uid: "fruit19",
        id2: "desc19",
        iName: "name19",
        name: "Pineapple",
        description: "Vitamin C\n Boosts Immune System\n Antioxidents",
        link: "https://www.medicalnewstoday.com/articles/276903.php",
        image:"pineapple.jpg",
        color: "#EAE100 5px solid",
        textColor: "#EAE100",
        descripColor: "#D5CD00"
      },
      {
        uid: "fruit20",
        id2: "desc20",
        iName: "name20",
        name: "Plum",
        description: "Best Source of Potassium\n Vitamin C\n Vitamin K",
        link: "https://www.webmd.com/food-recipes/benefits-plums#1",
        image:"plums.jpg",
        color: "#871D5A 5px solid",
        textColor: "#871D5A",
        descripColor: "#C72F87"
      },
      {
        uid: "fruit21",
        id2: "desc21",
        iName: "name21",
        name: "Pomegranate",
        description:
          "Best Source of Fiber \n Vitamin C\n Best Source of Potassium",
        link: "https://www.medicalnewstoday.com/articles/318385.php",
        image:"pomergranates.jpg",
        color: "#CA252A 5px solid",
        textColor: "#CA252A",
        descripColor: "#CA252A"
      },
      {
        uid: "fruit22",
        id2: "desc22",
        iName: "name22",
        name: "Raspberry",
        description:
          "Blood Sugar Regulation\n Antioxidents\n Best Source of Potassium",
        link: "https://www.medicalnewstoday.com/articles/283018.php",
        image:"raspberries.jpg",
        color: "#AD0633 5px solid",
        textColor: "#AD0633",
        descripColor: "#DE315F"
      },
      {
        uid: "fruit23",
        id2: "desc23",
        iName: "name23",
        name: "Spinach",
        description: "Anti-Cancer Benefits\n Manganese\n Vitamin E",
        link: "https://www.medicalnewstoday.com/articles/270609.php",
        image:"spinach.jpg",
        color: "#398517 5px solid",
        textColor: "#398517",
        descripColor: "#84C966"
      },
      {
        uid: "fruit24",
        id2: "desc24",
        iName: "name24",
        name: "Strawberry",
        description:
          "Cardiovascular Benefits\n Regulates Blood Sugar\n Anti-Cancer Benefits",
        link: "https://www.medicalnewstoday.com/articles/271285.php",
        image:"strawberry.jpg",
        color: "#DE0201 5px solid",
        textColor: "#DE0201",
        descripColor: "#E93737"
      },
      {
        uid: "fruit25",
        id2: "desc25",
        iName: "name25",
        name: "Watermelon",
        description: "Anti-Inflammatory\n Antioxidants\n Regulates Blood Flow",
        link: "https://www.medicalnewstoday.com/articles/266886.php",
        image:"watermelon.jpg",
        color: "#EA4934 5px solid",
        textColor: "#EA4934",
        descripColor: "#EA4934"
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
      img={require("../../assets/images/" + fruit.image)}
      color={fruit.color}
      textColor={fruit.textColor}
      descripColor={fruit.descripColor}
      uid={fruit.uid}
      desc={fruit.id2}
      id2={fruit.iName}
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
                    borderRadius: "20%",
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
      <ul id="listContainer">
        {newFruits}
      </ul>
    </>
  );
};

export default Ingredients;

// let ListCardLeft = props => {
//   console.log(props)
//   return (
//     <li className="fruitList">
//       <div className="row fruitRow" id={props.name}>
//         <div className="col-sm-2 mx-0">
//           <img src={props.img} alt={props.name} style={{border: props.color}} className="fruitsCollection"/>
//         </div>
//         <div className="col-sm-3 fruitsText align-self-center colBottom" id={props.id2} style={{color: props.textColor}}>{props.name}</div>
//         <div className="col-sm-3 fruitsDescription text-left align-self-center colBottom2" id={props.desc} style={{color: props.descripColor}}>{props.description}</div>
//         <div className="col-sm-4 px-0 align-self-end text-left colBottom3">
//           <a className="colBottom4" href={props.link} id={props.uid}>Read More >></a>
//         </div>
//       </div>
//       {/* <hr /> */}
//     </li>
//   );
// };

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

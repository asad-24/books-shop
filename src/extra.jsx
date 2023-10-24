// {foundBook ? (
//     <div>{/* <h1>{foundVideo.title}</h1> */}</div>
//   ) : (
//     <div className="sample  ms-5">

//       {services.length > 0 &&
//         services.map((value) => {
//           const { id, image_url, title, authors } = value;
//           return (
//             <div
//               className="col-lg-4 col-12 mb-2"
//               style={{
//                 display:
//                   search === "" ||
//                   title.toLowerCase().includes(search.toLowerCase())
//                     ? "inline-block"
//                     : "none",
//               }}
//               key={id}
//             >
//               <div className="card" style={{ width: "18rem" }}>
//                 <img
//                   src={image_url}
//                   style={{ height: "300px" }}
//                   className="card-img-top"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{title}</h5>
//                   <p className="card-text">
//                     <b>Author : </b>
//                     {authors}
//                   </p>
//                   <NavLink
//                     to={`/details/${id}`}
//                     className="btn btn-primary"
//                   >
//                     Details
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   )}
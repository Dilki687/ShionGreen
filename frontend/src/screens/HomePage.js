// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
// import bannerImage from './images/banner.jpeg'; // Replace with the actual path to your header image
// import cinnamonImage from './images/cinnamon.jpeg'; // Replace with the actual path to your cinnamon image
// import pepperImage from './images/pepper.jpeg'; // Replace with the actual path to your pepper image

// const HomePage = () => {
//   return (
//     <div>
//       {/* NavBar */}
//       <NavBar />

//       {/* Header Image */}
//       <div
//         className="text-center"
//         style={{
//           backgroundImage: `url(${bannerImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '400px',
//           color: 'white',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <h1 className="fw-bold">Welcome to Shion Green</h1>
//       </div>

//       {/* Sliding Pictures */}
//       <div className="container mt-5">
//         <h2 className="text-center mb-4">Our Products</h2>
//         <div
//           id="productCarousel"
//           className="carousel slide"
//           data-bs-ride="carousel"
//         >
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img
//                 src={cinnamonImage}
//                 className="d-block w-100"
//                 alt="Cinnamon"
//                 style={{ height: '400px', objectFit: 'cover' }}
//               />
//               <div className="carousel-caption">
//                 <h5>Cinnamon</h5>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <img
//                 src={pepperImage}
//                 className="d-block w-100"
//                 alt="Pepper"
//                 style={{ height: '400px', objectFit: 'cover' }}
//               />
//               <div className="carousel-caption">
//                 <h5>Pepper</h5>
//               </div>
//             </div>
//           </div>
//           {/* Carousel Controls */}
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#productCarousel"
//             data-bs-slide="prev"
//           >
//             <span
//               className="carousel-control-prev-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#productCarousel"
//             data-bs-slide="next"
//           >
//             <span
//               className="carousel-control-next-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

import React from 'react'

function HomePage() {
  return (
    <div>HomePage</div>
  )
}

export default HomePage
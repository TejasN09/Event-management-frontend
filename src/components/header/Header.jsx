// import React from "react";
// import "./Header.css";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import LoginForm from "../Loginform";
// import SignupForm from "../SignupForm";
// import { Link } from "react-router-dom";

// //tailwind
// const Header = () => {
//   const [navbar, setNavbar] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(false);

//   const handleLoginClick = () => {
//     setShowLoginForm(true);
//   };
//   // dark:bg-neutral-800 shadow
//   // return (
//   //     // <nav className="top-0 bg-wave4 h-auto max-w-full bg-no-repeat object-contain">
//   //     <nav className="top-0 bg-no-repeat relative w-full">
//   //         <svg xmlns="http://www.w3.org/2000/svg" transform="scale(1 -1)" width="100%" height="50%" viewBox="0 0 1440 320">
//   //             <path fill="#9400D3" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,144C672,128,768,64,864,69.3C960,75,1056,149,1152,154.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" >
//   //             </path></svg>
//   //         <div className="justify-between px-4 mx-auto w-full top-0 absolute md:items-center md:flex md:px-8">
//   //             <div>
//   //                 <div className="flex items-center justify-between py-3 md:py-5 md:block bottom-1">
//   //                     <a href="javascript:void(0)" className="text-white no-underline">
//   //                         <h2 className="text-xl font-bold text-white mt-2">Event Management</h2>
//   //                     </a>
//   //                     <div className="md:hidden">
//   //                         <button
//   //                             className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//   //                             onClick={() => setNavbar(!navbar)}>
//   //                             {navbar ? (
//   //                                 <svg
//   //                                     xmlns="http://www.w3.org/2000/svg"
//   //                                     className="w-6 h-6 text-white"
//   //                                     viewBox="0 0 20 20"
//   //                                     fill="currentColor"
//   //                                 >
//   //                                     <path
//   //                                         fillRule="evenodd"
//   //                                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//   //                                         clipRule="evenodd"
//   //                                     />
//   //                                 </svg>
//   //                             ) : (
//   //                                 <svg
//   //                                     xmlns="http://www.w3.org/2000/svg"
//   //                                     className="w-6 h-6 text-white"
//   //                                     fill="none"
//   //                                     viewBox="0 0 24 24"
//   //                                     stroke="currentColor"
//   //                                     strokeWidth={2}
//   //                                 >
//   //                                     <path
//   //                                         strokeLinecap="round"
//   //                                         strokeLinejoin="round"
//   //                                         d="M4 6h16M4 12h16M4 18h16"
//   //                                     />
//   //                                 </svg>
//   //                             )}
//   //                         </button>
//   //                     </div>
//   //                 </div>
//   //             </div>
//   //             <div>
//   //                 <div className={`flex-1 justify-self-center mt-2 md:block md:mt-0 ${navbar ? "block" : "hidden"}`}>
//   //                     <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 pt-2">
//   //                         <li className="text-white hover:text-indigo-200">
//   //                             <a href="javascript:void(0)" className="text-white no-underline">Home</a>
//   //                         </li>
//   //                         <li className="text-white hover:text-indigo-200">
//   //                             <a href="javascript:void(0)" className="text-white no-underline">Blog</a>
//   //                         </li>
//   //                         <li className="text-white hover:text-indigo-200 no-underline">
//   //                             <a href="javascript:void(0)" className="text-white no-underline">About US</a>
//   //                         </li>
//   //                         <li className="text-white hover:text-indigo-200">
//   //                             <a href="javascript:void(0)" className="text-white no-underline">Contact US</a>
//   //                         </li>
//   //                     </ul>

//   //                     <div className="mt-3 space-y-2 lg:hidden md:inline-block">
//   //                         <a
//   //                             href="javascript:void(0)"
//   //                             className="no-underline inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 mb-3"
//   //                         >
//   //                             Register
//   //                         </a>
//   //                         <a
//   //                             href="javascript:void(0)"
//   //                             className="no-underline inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 relative bottom-3"
//   //                         >
//   //                             Login
//   //                         </a>
//   //                     </div>
//   //                 </div>
//   //             </div>
//   //             <div className="hidden space-x-2 md:inline-block">
//   //                 {showLoginForm ? <SignupForm /> : (
//   //                     <button onClick={handleLoginClick} type="button" className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 no-underline">
//   //                         Register
//   //                     </button>
//   //                 )}
//   //                 <a href="javascript:void(0)" className="px-4 py-2 text-gray-900 bg-white rounded-md shadow hover:bg-gray-800 no-underline">
//   //                     Login
//   //                 </a>
//   //             </div>
//   //         </div>
//   //     </nav>
//   // );
//   return (
//     <nav className="top-0 relative w-full">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         transform="scale(1 -1)"
//         width="100%"
//         height="100%"
//         viewBox="0 0 1440 220"
//       >
//         <path
//           fill="#8B008B"
//           fill-opacity="1"
//           d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,144C672,128,768,64,864,69.3C960,75,1056,149,1152,154.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//         ></path>
//       </svg>

//       <div className="justify-between px-4 mx-auto w-full top-0 absolute md:items-center md:flex md:px-">
//         <h2 className="text-xs left-0 p-1  font-medium text-white sm:text-xl font-bold text-black">EM</h2>
//         <div>
//           <div className="flex items-center justify-between sm:py-5 sm:block">
//             <div className="sm:hidden">
//               <button
//                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 {navbar ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6 text-white"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             className={`flex-1 justify-self-center mt-2 sm:block sm:mt-0 ${
//               navbar ? "block" : "hidden"
//             }`}
//           >
//             <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 pt-2">
//               <li className="text-white hover:text-indigo-200">
//                 <a
//                   href="javascript:void(0)"
//                   className="text-white no-underline"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="text-white hover:text-indigo-200">
//                 <a
//                   href="javascript:void(0)"
//                   className="text-white no-underline"
//                 >
//                   Blog
//                 </a>
//               </li>
//               <li className="text-white hover:text-indigo-200 no-underline">
//                 <a
//                   href="javascript:void(0)"
//                   className="text-white no-underline"
//                 >
//                   About US
//                 </a>
//               </li>
//               <li className="text-white hover:text-indigo-200">
//                 <a
//                   href="javascript:void(0)"
//                   className="text-white no-underline"
//                 >
//                   Contact US
//                 </a>
//               </li>
//             </ul>

//             <div className="mt-3 space-y-2 lg:hidden md:inline-block">
//               <a
//                 href="javascript:void(0)"
//                 className="no-underline inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 mb-3"
//               >
//                 Register
//               </a>
//               <a
//                 href="javascript:void(0)"
//                 className="no-underline inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 relative bottom-3"
//               >
//                 Login
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="hidden space-x-2 md:inline-block">
//           {showLoginForm ? (
//             <SignupForm />
//           ) : (
//             <button
//               onClick={handleLoginClick}
//               type="button"
//               className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 no-underline"
//             >
//               Register
//             </button>
//           )}
//           <a
//             href="javascript:void(0)"
//             className="px-4 py-2 text-gray-900 bg-white rounded-md shadow hover:bg-gray-800 no-underline"
//           >
//             Login
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React from "react";
import "./Header.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "../Loginform";
import SignupForm from "../SignupForm";
import Svg from "./Svg";

//tailwind
const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };
    // dark:bg-neutral-800 shadow
    return (
        // <nav className="top-0 bg-wave4 h-auto max-w-full bg-no-repeat object-contain">
        <nav className="top-0 bg-no-repeat relative w-full z-50">
            <Svg />
            <div className="justify-between px-4 mx-auto w-full top-0 absolute md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block bottom-1 ">
                        <a href="javascript:void(0)" className="text-white no-underline">
                            <h2 className="text-xl font-bold text-white mt-2">Event Management</h2>
                        </a>
                        <div className="md:hidden bg-fuchsia-900 relative z-50">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center mt-2 md:block md:mt-0 bg-fuchsia-900 relative ${navbar ? "block" : "hidden"}` }>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 pt-2">
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)" className="text-white no-underline">Home</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)" className="text-white no-underline">Blog</a>
                            </li>
                            <li className="text-white hover:text-indigo-200 no-underline">
                                <a href="javascript:void(0)" className="text-white no-underline">About US</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)" className="text-white no-underline">Contact US</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            <a
                                href="javascript:void(0)"
                                className="no-underline inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 mb-3"
                            >
                                Register
                            </a>
                            <a
                                href="javascript:void(0)"
                                className="no-underline inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 relative bottom-3"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    {showLoginForm ? <SignupForm /> : (
                        <button onClick={handleLoginClick} type="button" className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 no-underline">
                            Register
                        </button>
                    )}
                    <a href="javascript:void(0)" className="px-4 py-2 text-gray-900 bg-white rounded-md shadow hover:bg-gray-800 no-underline">
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}
//   return (
//     <nav className="top-0 relative w-full">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         transform="scale(1 -1)"
//         width="100%"
//         height="100%"
//         viewBox="0 0 1440 220"
//         className="absolute top-0 z-0 "
//       >
//         <path
//           fill="#8B008B"
//           fill-opacity="1"
//           d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,144C672,128,768,64,864,69.3C960,75,1056,149,1152,154.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//         ></path>
//       </svg>

//       <div className="justify-between px-4 mx-auto w-full top-0 absolute md:items-center md:flex md:px-">
//         <h2 className="text-xs left-0 p-1  font-medium text-white sm:text-xl font-bold text-black">EM</h2>
//         <div>
//           <div className="flex items-center justify-between sm:py-5 sm:block">
//             <div className="sm:hidden">
//               <button
//                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 {navbar ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6 text-white"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             className={`flex-1 justify-self-center mt-2 sm:block sm:mt-0 ${
//               navbar ? "block" : "hidden"
//             }`}
//           >
//             <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 pt-2">
//               <li className="text-white hover:text-indigo-200">
//                 <a
//                   href="javascript:void(0)"
//                   className="text-white no-underline"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="text-white hover:text-indigo-200">
//                 <a
//                   href="javascript:void(0)"
//                   className="text-white no-underline"
//                 >
//                   Blog
//                 </a>
//               </li>
//               <li className="text-white hover:text-indigo-200 no-underline">
//                 <a
//                   href="javascript:void(0)"
//                   className="text-white no-underline"
//                 >
//                   About US
//                 </a>
//               </li>
//               <li className="text-white hover:text-indigo-200">
//                 <a
//                   href="javascript:void(0)"
//                   className="text-white no-underline"
//                 >
//                   Contact US
//                 </a>
//               </li>
//             </ul>

//             <div className="mt-3 space-y-2 lg:hidden md:inline-block">
//               <a
//                 href="javascript:void(0)"
//                 className="no-underline inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 mb-3"
//               >
//                 Register
//               </a>
//               <a
//                 href="javascript:void(0)"
//                 className="no-underline inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 relative bottom-3"
//               >
//                 Login
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="hidden space-x-2 md:inline-block">
//           {showLoginForm ? (
//             <SignupForm />
//           ) : (
//             <button
//               onClick={handleLoginClick}
//               type="button"
//               className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 no-underline"
//             >
//               Register
//             </button>
//           )}
//           <a
//             href="javascript:void(0)"
//             className="px-4 py-2 text-gray-900 bg-white rounded-md shadow hover:bg-gray-800 no-underline"
//           >
//             Login
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default Header;
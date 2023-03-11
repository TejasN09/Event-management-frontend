import React from "react";
import Header from "../header/Header";
const EventCard = ({ title, description }) => {
  return (
    <>
      {/* <Header/> */}
      <div className="bg-gray-400 dark:bg-slate-100 mb-auto max-w-sm m-1 border-fuchsia-600 border-1 p-1 rounded-xl drop-shadow-2xl ">
        <img
          className="rounded-xl p-1 border-1 drop-shadow-2xl"
          src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="p-2">
          <a href="#" className="no-underline ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-900">
              {title}
            </h5>
          </a>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div>
            <a
              href="#"
              className="no-underline inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-voilet-600 rounded-lg hover:bg-voilet-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-200 dark:bg-fuchsia-800 dark:hover:bg-fuchsia-600 dark:focus:ring-fuchsia-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;

import { useParams } from 'react-router-dom';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';


const Details = () => {
    const [searchParams] = useSearchParams();
    const title=searchParams.get('title');
    const description=searchParams.get('description');
    return (
        <>
            <Header />
            <div className="details-container flex flex-col lg:flex-row lg:items-center">
            <h1 className="md:text-4xl font-bold text-center text-gray-800 md:absolute w-full md:-mt-[37rem] -mt-8 relative text-3xl">Details about {title} event</h1>
                <img
                    className="w-full lg:w-1/2 h-auto object-cover md:m-10"
                    src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
                <div className="lg:w-1/2 p-4">
                    <h2 className="text-5xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-700 dark:text-gray-400 mb-4 text-2xl">{description}</p>
                    <a
                        href="/register"
                        className="inline-block py-2 px-4 bg-voilet-600 text-white rounded-lg hover:bg-voilet-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-200 dark:bg-fuchsia-800 dark:hover:bg-fuchsia-600 dark:focus:ring-fuchsia-800"
                    >
                        Register Now
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;

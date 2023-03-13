import React from "react";

const EventForm = () => {

    return (
        <>
            <section class="h-screen bg-fuchsia-800">
                {/* <h1 class="text-4xl font-bold text-center text-white absolute" >Welcome to Event Management</h1> */}
                <h1 className="text-4xl font-bold text-center text-white absolute w-full mt-10">Add Event</h1>

                <div class="h-screen flex flex-col items-center justify-center px-3 my-auto mx-auto lg:py-2">
                    <span class="flex items-center mb-0 text-2xl font-semibold text-gray-900 dark:text-white">
                        Fill Details
                    </span>
                    <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-fuchsia-400 ">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-6">
                            {/* <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-black">
                                Sign in to your account
                            </h1> */}
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Event Name
                                    </label>
                                    <input
                                        type="Name"
                                        name="Name"
                                        id="email"
                                        class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                       bg-fuchsia-500  dark:border-gray-600 placeholder-white text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your event name"
                                        required=""
                                    ></input>
                                </div>
                                <div>
                                    <label
                                        for="text"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Event Description
                                    </label>
                                    <textarea
                                        type="text"
                                        name="name"
                                        id="password"
                                        rows="4"
                                        col="5"
                                        placeholder="Event description"
                                        class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                      bg-fuchsia-500  dark:border-gray-600 placeholder-white text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                    ></textarea>
                                </div>
                                <div>

                                </div>
                                <div >

                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-fuchsia-900 dark:text-stone-50 focus:outline-none dark:bg-fuchsia-600 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
                                    </input>
                                </div>

                                <button
                                    type="submit"
                                    class="w-full dark:text-black bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                >
                                    Submit
                                </button>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventForm;
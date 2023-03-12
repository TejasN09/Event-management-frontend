const SignupForm = () => {
  return (
    <div class=" bg-fuchsia-800 min-h-screen flex flex-col">

      <h1 className="text-4xl font-bold text-center text-white absolute w-full mt-10">Welcome to Event Management</h1>


      <div class="container flex-1 flex flex-col items-center justify-center px-2">
        <span
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Create an Account
        </span>
        <div class=" w-full p-3 bg-fuchsia-400 rounded-lg shadow dark:border sm:max-w-md  dark:border-gray-700">
          <h3 class="mb-3 text-2xl font-semibold text-center">Sign up</h3>
          <form class="space-y-2 md:space-y-3 " action="/signup">
            <input
              type="text"
              class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
              bg-fuchsia-500  dark:border-gray-600 placeholder-white text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="email"
              class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
              bg-fuchsia-500  dark:border-gray-600 placeholder-white text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
              bg-fuchsia-500  dark:border-gray-600 placeholder-white text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
              bg-fuchsia-500  dark:border-gray-600 placeholder-white text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              class="w-full dark:text-black bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Create Account
            </button>

            <div class="container font-medium max-w-md mx-auto flex-1 flex flex-col items-center justify-center  text-stone-300 mt-3 ">
              Already have an account?
              <a
                className="no-underline border-b border-blue"
                href="/login"
              >
                Log in
              </a>
            </div>
            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the{" "}
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

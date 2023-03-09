const SignupForm = () => {
  return (
    <div class="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">

      <div class="container flex-1 flex flex-col items-center justify-center px-2">
      <span
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Create an Account
          </span>
        <div class=" w-full p-3 bg-white rounded-lg shadow dark:border sm:max-w-md  dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-3 text-2xl font-semibold text-center">Sign up</h3>
          <form class="space-y-2 md:space-y-3 " action="/signup">
          <input
            type="text"
            class="bg-gray-50  w-full border border-gray-300 mb-2 text-gray-900 sm:text-sm rounded-lg focus:ring-stone-600 focus:border-stone-600 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="email"
            class="bg-gray-50 w-full  border border-gray-300 mb-2 text-gray-900 sm:text-sm rounded-lg focus:ring-stone-600 focus:border-stone-600 block  p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            class="bg-gray-50  w-full border border-gray-300 mb-2 text-gray-900 sm:text-sm rounded-lg focus:ring-stone-600 focus:border-stone-600 block  p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            class="bg-gray-50  w-full border border-gray-300 mb-2 text-gray-900 sm:text-sm rounded-lg focus:ring-stone-600 focus:border-stone-600 block  p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white-100  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            class="w-full dark:text-black bg-sky-100 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-stone-200 font-medium rounded-lg text-sm px-5 py-3 text-center "
            >
            Create Account
          </button>

          <div class="container font-medium max-w-md mx-auto flex-1 flex flex-col items-center justify-center  text-stone-300 mt-3 ">
            Already have an account?
            <a
              class="no-underline border-b border-blue "
              href="../login/"
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

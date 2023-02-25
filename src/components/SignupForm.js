const SignupForm = () => {
  return (
    <div class="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-2 py-4 rounded shadow-md text-black w-full">
          <h3 class="mb-3 text-2xl font-semibold text-center">Sign up</h3>
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="email"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            class="w-full dark:text-black font-normal text-center py-3 rounded bg-sky-400 text-white hover:bg-sky-700 focus:outline-none my-1"
          >
            Create Account
          </button>

          <div class="container  max-w-sm mx-auto flex-1 flex flex-col items-center justify-center  font-semibold text-grey-dark mt-6 ">
            Already have an account?
            <a
              class="border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
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
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

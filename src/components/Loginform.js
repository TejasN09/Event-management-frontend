function LoginForm() {
  return (
    <>
      <section class="h-screen bg-fuchsia-800">
        {/* <h1 class="text-4xl font-bold text-center text-white absolute" >Welcome to Event Management</h1> */}
        <h1 className="text-4xl font-bold text-center text-white absolute w-full mt-10">Welcome to Event Management</h1>

        <div class="h-screen flex flex-col items-center justify-center px-3 my-auto mx-auto lg:py-2">
          <span class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Already Have Account?
          </span>
          <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-fuchsia-400 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-6">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-black">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                       bg-fuchsia-500  dark:border-gray-600 placeholder-white text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  ></input>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                      bg-fuchsia-500  dark:border-gray-600 placeholder-white text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  ></input>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      ></input>
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="/forgot-password"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full dark:text-black bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                <p class="text-sm font-normal text-gray-900">
                  Don’t have an account yet?{" "}
                  <a
                    href="/register"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;

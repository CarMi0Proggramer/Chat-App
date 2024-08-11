export default function RegisterForm() {
    return (
        <main>
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex justify-center">
                <div className="max-w-screen-xl m-5 bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 px-12 py-8">
                        <div className="flex flex-col items-center">
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-200 dark:bg-green-400 text-gray-800 flex items-center justify-center focus:outline-none hover:shadow focus:ring-4 focus:ring-green-100 dark:focus:ring-green-400/30 focus:shadow-outline">
                                        <div className="bg-white p-2 rounded-full">
                                            <svg
                                                className="w-4"
                                                viewBox="0 0 533.5 544.3"
                                            >
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4"
                                                />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853"
                                                />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04"
                                                />
                                                <path
                                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                    fill="#ea4335"
                                                />
                                            </svg>
                                        </div>
                                        <span className="ml-4 dark:text-gray-100">
                                            Sign Up with Google
                                        </span>
                                    </button>
                                </div>

                                <div className="my-12 border-b text-center">
                                    <div className="leading-none px-2 inline-block text-sm text-gray-600 dark:text-white tracking-wide font-medium bg-white dark:bg-gray-700 transform translate-y-1/2">
                                        Or sign up with e-mail
                                    </div>
                                </div>

                                <div className="mx-auto max-w-xs">
                                    <input
                                        className="dark:text-gray-300 w-full px-6 py-3 rounded-lg font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 border border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-300"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                    <input
                                        className="dark:text-gray-300 w-full px-6 py-3 rounded-lg font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none mt-5 focus:ring-2 focus:ring-green-400 border border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-300"
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <input
                                        className="dark:text-gray-300 w-full px-6 py-3 rounded-lg font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none mt-5 focus:ring-2 focus:ring-green-400 border border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-300"
                                        type="password"
                                        id="confirm-password"
                                        name="confirm-password"
                                        placeholder="Confirm password"
                                    />
                                    <button
                                        className="text-gray-100 mt-5 tracking-wide font-semibold bg-green-500 dark:bg-green-600 w-full py-3 rounded-lg flex items-center justify-center focus:ring-4
                            focus:ring-green-500/50 dark:focus:ring-green-600/40 focus:outline-none"
                                    >
                                        <svg
                                            className="w-6 h-6 -ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">Sign Up</span>
                                    </button>
                                    <p className="mt-6 text-sm text-gray-600 dark:text-white text-center">
                                        Already have an account?
                                        <a
                                            href="/login"
                                            className="border-b border-gray-500 underline"
                                        >
                                            {" "}
                                            sing in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-green-300 dark:bg-green-400 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('/images/register_bg.webp')]"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}

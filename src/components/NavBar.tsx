export default function NavBar() {
    return (
        <header className="flex justify-between py-3 px-4 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-600 gap-6">
            <div className="flex items-center gap-3">
                <img
                    src="/logo.svg"
                    alt="Chat App Logo"
                    className="size-6 sm:size-8"
                />
                <span className="text-sm sm:text-xl font-bold uppercase text-green-600 dark:text-green-500">
                    Chat App
                </span>
            </div>

            <form className="max-w-xs flex-1">
                <label
                    htmlFor="search-input"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="size-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="search-input"
                        className="block text-ellipsis w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-600 focus:border-green-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600"
                        placeholder="Search my chats"
                        required
                    />
                </div>
            </form>
        </header>
    );
}

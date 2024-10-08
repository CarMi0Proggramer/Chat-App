import BottomNavigationElement from "./BottomNavigationElement";

export default function BottomNavigation() {
    return (
        <footer className="fixed z-50 w-full h-16 -translate-x-1/2 bg-white border border-gray-200  bottom-0 left-1/2 dark:bg-gray-800 dark:border-gray-600">
            <div className="grid h-full grid-cols-5 mx-auto">
                <BottomNavigationElement href="/" title="Home">
                    <svg
                        className="size-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-500"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                </BottomNavigationElement>
                <BottomNavigationElement href="/chats" title="Chats">
                    <svg
                        className="size-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-500"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 -960 960 960"
                    >
                        <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                    </svg>
                </BottomNavigationElement>
                <div className="flex items-center justify-center">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center size-10 font-medium bg-green-600 rounded-full focus:ring-4 focus:ring-green-400 focus:outline-none dark:focus:ring-green-600/40"
                    >
                        <svg
                            className="size-4 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                            />
                        </svg>
                        <span className="sr-only">New item</span>
                    </button>
                </div>
                <BottomNavigationElement href="/settings" title="Settings">
                    <svg
                        className="size-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-500"
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                        />
                    </svg>
                </BottomNavigationElement>
                <BottomNavigationElement href="/profile" title="Profile">
                    <svg
                        className="size-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-500"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                </BottomNavigationElement>
            </div>
        </footer>
    );
}

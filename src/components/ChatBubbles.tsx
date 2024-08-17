export function ChatMessageBubble() {
    return (
        <div className="flex items-start gap-2.5">
            <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Jese image"
            />
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        Bonnie Green
                    </span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        11:46
                    </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    That's awesome. I think our users will really appreciate the
                    improvements.
                </p>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Delivered
                </span>
            </div>
            <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                data-dropdown-placement="bottom-start"
                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                type="button"
            >
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>
            <div
                id="dropdownDots"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Reply
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Forward
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Copy
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Report
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export function ChatAudioBubble() {
    return (
        <div className="flex items-start gap-2.5">
            <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Jese image"
            />
            <div className="flex flex-col gap-2.5 w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        Bonnie Green
                    </span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        11:46
                    </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <button
                        className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        type="button"
                    >
                        <svg
                            className="w-4 h-4 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 12 16"
                        >
                            <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </button>
                    <svg
                        aria-hidden="true"
                        className="w-[145px] md:w-[185px] md:h-[40px]"
                        viewBox="0 0 185 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="17"
                            width="3"
                            height="6"
                            rx="1.5"
                            fill="#6B7280"
                            className="dark:fill-white"
                        />
                        <rect
                            x="7"
                            y="15.5"
                            width="3"
                            height="9"
                            rx="1.5"
                            fill="#6B7280"
                            className="dark:fill-white"
                        />
                        <rect
                            x="21"
                            y="6.5"
                            width="3"
                            height="27"
                            rx="1.5"
                            fill="#6B7280"
                            className="dark:fill-white"
                        />
                        <rect
                            x="14"
                            y="6.5"
                            width="3"
                            height="27"
                            rx="1.5"
                            fill="#6B7280"
                            className="dark:fill-white"
                        />
                        <rect
                            x="28"
                            y="3"
                            width="3"
                            height="34"
                            rx="1.5"
                            fill="#6B7280"
                            className="dark:fill-white"
                        />
                        <rect
                            x="35"
                            y="3"
                            width="3"
                            height="34"
                            rx="1.5"
                            fill="#6B7280"
                            className="dark:fill-white"
                        />
                        <rect
                            x="42"
                            y="5.5"
                            width="3"
                            height="29"
                            rx="1.5"
                            fill="#6B7280"
                            className="dark:fill-white"
                        />
                        <rect
                            x="49"
                            y="10"
                            width="3"
                            height="20"
                            rx="1.5"
                            fill="#6B7280"
                            className="dark:fill-white"
                        />
                        <rect
                            x="56"
                            y="13.5"
                            width="3"
                            height="13"
                            rx="1.5"
                            fill="#6B7280"
                            className="dark:fill-white"
                        />
                        <rect
                            x="63"
                            y="16"
                            width="3"
                            height="8"
                            rx="1.5"
                            fill="#6B7280"
                            className="dark:fill-white"
                        />
                        <rect
                            x="70"
                            y="12.5"
                            width="3"
                            height="15"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="77"
                            y="3"
                            width="3"
                            height="34"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="84"
                            y="3"
                            width="3"
                            height="34"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="91"
                            y="0.5"
                            width="3"
                            height="39"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="98"
                            y="0.5"
                            width="3"
                            height="39"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="105"
                            y="2"
                            width="3"
                            height="36"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="112"
                            y="6.5"
                            width="3"
                            height="27"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="119"
                            y="9"
                            width="3"
                            height="22"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="126"
                            y="11.5"
                            width="3"
                            height="17"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="133"
                            y="2"
                            width="3"
                            height="36"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="140"
                            y="2"
                            width="3"
                            height="36"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="147"
                            y="7"
                            width="3"
                            height="26"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="154"
                            y="9"
                            width="3"
                            height="22"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="161"
                            y="9"
                            width="3"
                            height="22"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="168"
                            y="13.5"
                            width="3"
                            height="13"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="175"
                            y="16"
                            width="3"
                            height="8"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="182"
                            y="17.5"
                            width="3"
                            height="5"
                            rx="1.5"
                            fill="#E5E7EB"
                            className="dark:fill-gray-500"
                        />
                        <rect
                            x="66"
                            y="16"
                            width="8"
                            height="8"
                            rx="4"
                            fill="#1C64F2"
                        />
                    </svg>
                    <span className="inline-flex self-center items-center p-2 text-sm font-medium text-gray-900 dark:text-white">
                        3:42
                    </span>
                </div>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Delivered
                </span>
            </div>
            <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                data-dropdown-placement="bottom-start"
                className="flex-shrink-0 inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                type="button"
            >
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>
            <div
                id="dropdownDots"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Reply
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Forward
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Copy
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Report
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export function ChatFileBubble() {
    return (
        <div className="flex items-start gap-2.5">
            <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie Green image"
            />
            <div className="flex flex-col gap-1">
                <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            Bonnie Green
                        </span>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            11:46
                        </span>
                    </div>
                    <div className="flex items-start my-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2">
                        <div className="me-2">
                            <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
                                <svg
                                    fill="none"
                                    aria-hidden="true"
                                    className="w-5 h-5 flex-shrink-0"
                                    viewBox="0 0 20 21"
                                >
                                    <g clip-path="url(#clip0_3173_1381)">
                                        <path
                                            fill="#E2E5E7"
                                            d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"
                                        />
                                        <path
                                            fill="#B0B7BD"
                                            d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"
                                        />
                                        <path
                                            fill="#CAD1D8"
                                            d="M18.774 9.25l-3.75-3.75h3.75v3.75z"
                                        />
                                        <path
                                            fill="#F15642"
                                            d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"
                                        />
                                        <path
                                            fill="#fff"
                                            d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"
                                        />
                                        <path
                                            fill="#CAD1D8"
                                            d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3173_1381">
                                            <path
                                                fill="#fff"
                                                d="M0 0h20v20H0z"
                                                transform="translate(0 .5)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Flowbite Terms & Conditions
                            </span>
                            <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                                12 Pages
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="self-center"
                                    width="3"
                                    height="4"
                                    viewBox="0 0 3 4"
                                    fill="none"
                                >
                                    <circle
                                        cx="1.5"
                                        cy="2"
                                        r="1.5"
                                        fill="#6B7280"
                                    />
                                </svg>
                                18 MB
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="self-center"
                                    width="3"
                                    height="4"
                                    viewBox="0 0 3 4"
                                    fill="none"
                                >
                                    <circle
                                        cx="1.5"
                                        cy="2"
                                        r="1.5"
                                        fill="#6B7280"
                                    />
                                </svg>
                                PDF
                            </span>
                        </div>
                        <div className="inline-flex self-center items-center">
                            <button
                                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
                                type="button"
                            >
                                <svg
                                    className="w-4 h-4 text-gray-900 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Delivered
                    </span>
                </div>
            </div>
            <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                data-dropdown-placement="bottom-start"
                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                type="button"
            >
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>
            <div
                id="dropdownDots"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Reply
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Forward
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Copy
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Report
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export function ChatPhotoBubble() {
    return (
        <div className="flex items-start gap-2.5">
            <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie Green image"
            />
            <div className="flex flex-col gap-1">
                <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            Bonnie Green
                        </span>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            11:46
                        </span>
                    </div>
                    <p className="text-sm font-normal text-gray-900 dark:text-white">
                        This is the new office {"<"}3
                    </p>
                    <div className="group relative my-2.5">
                        <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <button
                                data-tooltip-target="download-image"
                                className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                            >
                                <svg
                                    className="w-5 h-5 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 18"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                                    />
                                </svg>
                            </button>
                            <div
                                id="download-image"
                                role="tooltip"
                                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                            >
                                Download image
                                <div
                                    className="tooltip-arrow"
                                    data-popper-arrow
                                ></div>
                            </div>
                        </div>
                        <img
                            src="/docs/images/blog/image-2.jpg"
                            className="rounded-lg"
                        />
                    </div>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Delivered
                    </span>
                </div>
            </div>
            <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                data-dropdown-placement="bottom-start"
                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                type="button"
            >
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>
            <div
                id="dropdownDots"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Reply
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Forward
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Copy
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Report
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export function ChatMultiplePhotosBubble() {
    return (
        <div className="flex items-start gap-2.5">
            <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie Green image"
            />
            <div className="flex flex-col gap-1">
                <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            Bonnie Green
                        </span>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            11:46
                        </span>
                    </div>
                    <p className="text-sm font-normal text-gray-900 dark:text-white">
                        This is the new office {"<"}3
                    </p>
                    <div className="grid gap-4 grid-cols-2 my-2.5">
                        <div className="group relative">
                            <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <button
                                    data-tooltip-target="download-image-1"
                                    className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                                >
                                    <svg
                                        className="w-4 h-4 text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="download-image-1"
                                    role="tooltip"
                                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                >
                                    Download image
                                    <div
                                        className="tooltip-arrow"
                                        data-popper-arrow
                                    ></div>
                                </div>
                            </div>
                            <img
                                src="/docs/images/blog/image-1.jpg"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="group relative">
                            <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <button
                                    data-tooltip-target="download-image-2"
                                    className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                                >
                                    <svg
                                        className="w-4 h-4 text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="download-image-2"
                                    role="tooltip"
                                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                >
                                    Download image
                                    <div
                                        className="tooltip-arrow"
                                        data-popper-arrow
                                    ></div>
                                </div>
                            </div>
                            <img
                                src="/docs/images/blog/image-2.jpg"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="group relative">
                            <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <button
                                    data-tooltip-target="download-image-3"
                                    className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                                >
                                    <svg
                                        className="w-4 h-4 text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="download-image-3"
                                    role="tooltip"
                                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                >
                                    Download image
                                    <div
                                        className="tooltip-arrow"
                                        data-popper-arrow
                                    ></div>
                                </div>
                            </div>
                            <img
                                src="/docs/images/blog/image-3.jpg"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="group relative">
                            <button className="absolute w-full h-full bg-gray-900/90 hover:bg-gray-900/50 transition-all duration-300 rounded-lg flex items-center justify-center">
                                <span className="text-xl font-medium text-white">
                                    +7
                                </span>
                                <div
                                    id="download-image"
                                    role="tooltip"
                                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                >
                                    Download image
                                    <div
                                        className="tooltip-arrow"
                                        data-popper-arrow
                                    ></div>
                                </div>
                            </button>
                            <img
                                src="/docs/images/blog/image-1.jpg"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Delivered
                        </span>
                        <button className="text-sm text-blue-700 dark:text-blue-500 font-medium inline-flex items-center hover:underline">
                            <svg
                                className="w-3 h-3 me-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 18"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                                />
                            </svg>
                            Save all
                        </button>
                    </div>
                </div>
            </div>
            <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                data-dropdown-placement="bottom-start"
                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                type="button"
            >
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>
            <div
                id="dropdownDots"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Reply
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Forward
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Copy
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Report
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export function ChatLinkBubble() {
    return (
        <div className="flex items-start gap-2.5">
            <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Jese image"
            />
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        Bonnie Green
                    </span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        11:46
                    </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    Check out this open-source UI component library based on
                    Tailwind CSS:
                </p>
                <p className="text-sm font-normal pb-2.5 text-gray-900 dark:text-white">
                    <a
                        href="https://github.com/themesberg/flowbite"
                        className="text-blue-700 dark:text-blue-500 underline hover:no-underline font-medium break-all"
                    >
                        https://github.com/themesberg/flowbite
                    </a>
                </p>
                <a
                    href="#"
                    className="bg-gray-50 dark:bg-gray-600 rounded-xl p-4 mb-2 hover:bg-gray-200 dark:hover:bg-gray-500"
                >
                    <img
                        src="https://flowbite.com/docs/images/og-image.png"
                        className="rounded-lg mb-2"
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        GitHub - themesberg/flowbite: The most popular and open
                        source libra ...
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                        github.com
                    </span>
                </a>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Delivered
                </span>
            </div>
            <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                data-dropdown-placement="bottom-start"
                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                type="button"
            >
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>
            <div
                id="dropdownDots"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Reply
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Forward
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Copy
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Report
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

import Layout from "../layouts/Layout";

export default function Profile() {
    return (
        <Layout>
            <main className="w-full self-center max-w-screen-2xl flex justify-center mb-16 px-4 bg-transparent">
                <section className="flex flex-col w-full my-6 dark:text-gray-300 gap-y-4">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <div className="flex flex-col lg:flex-row">
                            <div className="px-10 py-5 flex justify-center sm:justify-start">
                                <div className="flex flex-col items-center sm:flex-row gap-5">
                                    <img
                                        alt="Your photo"
                                        src="/images/yo.webp"
                                        className="shadow-xl rounded-2xl h-auto align-middle border-none max-w-40"
                                    />
                                    <div className="flex flex-col text-center text-pretty sm:text-left gap-y-2">
                                        <h3 className="text-xl font-semibold leading-normal">
                                            Carlos Miguel
                                        </h3>
                                        <span className="-mt-2">
                                            FullStack Developer - Awesome
                                            Salesperson
                                        </span>
                                        <button
                                            type="button"
                                            className="self-center mt-2 sm:self-start focus:outline-none text-white bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:focus:ring-green-600/50 flex gap-x-2 items-center"
                                        >
                                            <svg
                                                className="size-5 sm:size-6"
                                                viewBox="0 -960 960 960"
                                                fill="#e8eaed"
                                            >
                                                <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z" />
                                            </svg>
                                            Upload Image
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 text-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <div className="flex justify-center">
                            <h2 className="text-lg md:text-xl uppercase font-semibold border-b-2 border-green-600 dark:border-b-green-300 w-fit">
                                General Information
                            </h2>
                        </div>
                        <form className="mt-4 flex flex-col gap-y-3">
                            <div className="flex flex-col gap-y-1 justify-center">
                                <label
                                    htmlFor="name"
                                    className="text-start font-semibold dark:text-white"
                                >
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Carlos Miguel"
                                    className="dark:text-gray-200 w-full px-6 py-3 rounded-lg font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 border border-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                                />
                            </div>
                            <div className="flex flex-col gap-y-1 justify-center">
                                <label
                                    htmlFor="occupation"
                                    className="text-start font-semibold dark:text-white"
                                >
                                    Occupation:
                                </label>
                                <input
                                    type="text"
                                    id="occupation"
                                    name="occupation"
                                    placeholder="FullStack Web Developer"
                                    className="dark:text-gray-200 w-full px-6 py-3 rounded-lg font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 border border-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                                />
                            </div>
                            <div className="flex flex-col gap-y-1 justify-center">
                                <label
                                    htmlFor="description"
                                    className="text-start font-semibold dark:text-white"
                                >
                                    Description:
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="I have a deep passion for programming and a knack for solving complex problems, from frontend to backend I love every aspect of the development process."
                                    className="dark:text-gray-200 w-full px-6 py-3 rounded-lg font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 border border-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 resize-none min-h-52"
                                />
                            </div>
                            <button
                                type="button"
                                className="mt-2 focus:outline-none text-white bg-green-500 focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:focus:ring-green-600/50 w-full md:w-1/4"
                            >
                                Save All
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

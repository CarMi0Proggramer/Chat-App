export default function NotFound() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 h-dvh">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <div className="grid place-content-center">
                            <img
                                src="../../images/404.webp"
                                alt="Missing page image"
                                className="w-full max-w-80 object-fit object-center"
                            />
                        </div>
                        <h1 className="mb-4 text-2xl tracking-tight font-extrabold text-green-600 dark:text-green-400">
                            404 Not Found
                        </h1>
                        <p className="mb-4 text-4xl tracking-tight font-bold text-gray-900 md:text-5xl dark:text-white">
                            Whoops! That page doesn’t exist.
                        </p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                            Sorry, we can't find that page. You'll find lots to
                            explore on the home page.{" "}
                        </p>
                        <a
                            href="/"
                            className="inline-flex text-white bg-green-500 focus:ring-green-200 dark:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-green-600/40 my-4"
                        >
                            Back to Homepage
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

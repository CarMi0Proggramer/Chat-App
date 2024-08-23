import Chat from "../components/Chat";

import Layout from "../layouts/Layout";

export default function Chats() {
    return (
        <Layout>
            <main className="flex flex-col w-full flex-1 overflow-y-auto my-[65px]">
                <section className="p-1 bg-green-300 dark:bg-green-600">
                    <nav>
                        <ul className="w-full flex justify-evenly items-center text-white h-12 font-medium text-base md:text-lg">
                            <li className="hover:underline">
                                <a href="#">View All</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Unread</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Archived</a>
                            </li>
                        </ul>
                    </nav>
                </section>
                <Chat />
            </main>
        </Layout>
    );
}

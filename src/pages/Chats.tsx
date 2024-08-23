import Chat from "../components/Chat";

import Layout from "../layouts/Layout";

export default function Chats() {
    return (
        <Layout>
            <main className="flex flex-col w-full flex-1 overflow-y-auto my-[65px]">
                <section>
                    <nav>
                        <ul className="w-full flex justify-evenly items-center text-white h-12 bg-green-300 dark:bg-green-600 font-medium text-lg md:text-xl">
                            <li className="">
                                <a href="#">View All</a>
                            </li>
                            <li className="">
                                <a href="#">Unread</a>
                            </li>
                            <li className="">
                                <a href="#">Groups</a>
                            </li>
                        </ul>
                    </nav>
                </section>
                <Chat />
            </main>
        </Layout>
    );
}

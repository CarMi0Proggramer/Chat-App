import Layout from "../layouts/Layout";
import MessagePreview from "../components/MessagePreview";

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
                <section className="dark:text-gray-300 w-full flex flex-col">
                    <MessagePreview
                        name="Kevin Da Silva"
                        preview="Ya completaste las tareas acuerdate que tienes que estudiar historia o si no no vas a poder ir a la universidad porque para programar hace falta que sepas historia."
                        lastTime="5:12pm"
                        url=""
                    />
                    <MessagePreview
                        name="Kevin Da Silva"
                        preview="Ya completaste las tareas acuerdate que tienes que estudiar historia o si no no vas a poder ir a la universidad porque para programar hace falta que sepas historia."
                        lastTime="5:12pm"
                        url=""
                        unReadMessages={3}
                    />
                    <MessagePreview
                        name="Kevin Da Silva"
                        preview="Ya completaste las tareas acuerdate que tienes que estudiar historia o si no no vas a poder ir a la universidad porque para programar hace falta que sepas historia."
                        lastTime="5:12pm"
                        url=""
                        unReadMessages={3}
                    />
                    <MessagePreview
                        name="Kevin Da Silva"
                        preview="Ya completaste las tareas acuerdate que tienes que estudiar historia o si no no vas a poder ir a la universidad porque para programar hace falta que sepas historia."
                        lastTime="5:12pm"
                        url=""
                        unReadMessages={3}
                    />
                    <MessagePreview
                        name="Kevin Da Silva"
                        preview="Ya completaste las tareas acuerdate que tienes que estudiar historia o si no no vas a poder ir a la universidad porque para programar hace falta que sepas historia."
                        lastTime="5:12pm"
                        url=""
                        unReadMessages={3}
                    />
                </section>
            </main>
        </Layout>
    );
}

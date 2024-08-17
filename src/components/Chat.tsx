import { Avatar } from "flowbite-react";

type MessageParams = {
    name: string;
    messagePreview: string;
    lastTime: string;
    url: string;
    unReadMessages: number;
};
function Message({
    name,
    messagePreview,
    lastTime,
    url,
    unReadMessages,
}: MessageParams) {
    return (
        <article className="flex h-16 items-center px-2 py-1 gap-3 border-b border-b-gray-400 dark:border-b-gray-700]">
            <div>
                <Avatar img={url} />
            </div>
            <div className="flex-1 flex truncate justify-between">
                <div className="flex flex-col max-w-[80%] lg:max-w-[90%]">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="truncate dark:text-gray-400">
                        {messagePreview}
                    </p>
                </div>
                <div className="flex flex-col">
                    <span>{lastTime}</span>
                    <span className="grid place-content-center rounded-full bg-green-300 dark:bg-green-600">
                        {unReadMessages}
                    </span>
                </div>
            </div>
        </article>
    );
}

export default function Chat() {
    return (
        <main className="flex flex-col w-full flex-1 overflow-y-auto my-[65px]">
            <section>
                <nav>
                    <ul className="w-full flex justify-evenly items-center text-white h-12 text-lg bg-green-300 dark:bg-green-600">
                        <li className="">
                            <a href="#">All</a>
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
            <section className="dark:text-gray-300 w-full flex flex-col gap-2  ">
                <Message
                    name="Kevin Da Silva"
                    messagePreview="Ya completaste las tareas acuerdate que tienes que estudiar historia o si no no vas a poder ir a la universidad porque para programar hace falta que sepas historia."
                    lastTime="5:12pm"
                    url=""
                    unReadMessages={3}
                />
                <Message
                    name="Kevin Da Silva"
                    messagePreview="Ya completaste las tareas acuerdate que tienes que estudiar historia o si no no vas a poder ir a la universidad porque para programar hace falta que sepas historia."
                    lastTime="5:12pm"
                    url=""
                    unReadMessages={3}
                />
                <Message
                    name="Kevin Da Silva"
                    messagePreview="Ya completaste las tareas acuerdate que tienes que estudiar historia o si no no vas a poder ir a la universidad porque para programar hace falta que sepas historia."
                    lastTime="5:12pm"
                    url=""
                    unReadMessages={3}
                />
                <Message
                    name="Kevin Da Silva"
                    messagePreview="Ya completaste las tareas acuerdate que tienes que estudiar historia o si no no vas a poder ir a la universidad porque para programar hace falta que sepas historia."
                    lastTime="5:12pm"
                    url=""
                    unReadMessages={3}
                />
                <Message
                    name="Kevin Da Silva"
                    messagePreview="Ya completaste las tareas acuerdate que tienes que estudiar historia o si no no vas a poder ir a la universidad porque para programar hace falta que sepas historia."
                    lastTime="5:12pm"
                    url=""
                    unReadMessages={3}
                />
            </section>
        </main>
    );
}

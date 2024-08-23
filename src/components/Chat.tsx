import { Avatar } from "flowbite-react";

type MessageParams = {
    name: string;
    messagePreview: string;
    lastTime: string;
    url: string;
    unReadMessages?: number;
};
function Message({
    name,
    messagePreview,
    lastTime,
    url,
    unReadMessages,
}: MessageParams) {
    return (
        <a
            href="#"
            className="flex h-16 items-center px-2 py-1 gap-3 border-b border-b-gray-400 dark:border-b-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
            <div>
                <Avatar img={url} />
            </div>
            <div className="flex-1 flex truncate justify-between">
                <div className="flex flex-col max-w-[80%] lg:max-w-[90%]">
                    <h3 className="text-base md:text-lg font-medium dark:text-white">
                        {name}
                    </h3>
                    <p className="text-sm md:text-base truncate text-gray-800 dark:text-gray-400">
                        {messagePreview}
                    </p>
                </div>
                <div className="grid place-content-center text-sm md:text-base">
                    <span>{lastTime}</span>
                    <span className="grid place-content-center rounded-full bg-green-300 dark:bg-green-600">
                        {unReadMessages}
                    </span>
                </div>
            </div>
        </a>
    );
}

export default function Chat() {
    return (
        <section className="dark:text-gray-300 w-full flex flex-col">
            <Message
                name="Kevin Da Silva"
                messagePreview="Ya completaste las tareas acuerdate que tienes que estudiar historia o si no no vas a poder ir a la universidad porque para programar hace falta que sepas historia."
                lastTime="5:12pm"
                url=""
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
    );
}

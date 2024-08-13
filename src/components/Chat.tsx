type ChatParams = {
    url: string;
    name: string;
    lastMessage: string;
};

export default function Chat({ url, name, lastMessage }: ChatParams) {
    return (
        <div>
            <h1>Chat</h1>
            <p>Chat with {name}</p>
            <pre>{lastMessage}</pre>
            <img src={url} alt="" />
        </div>
    );
}

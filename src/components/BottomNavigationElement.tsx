import { ReactNode } from "react";
import { Tooltip } from "flowbite-react";

type BottomNavigationTooltipParams = {
    title: string;
    href: string;
    children: ReactNode;
};

export default function BottomNavigationTooltip({
    title,
    href,
    children,
}: BottomNavigationTooltipParams) {
    return (
        <a
            href={href}
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
            <Tooltip content={title} arrow={true}>
                {children}
            </Tooltip>
        </a>
    );
}

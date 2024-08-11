import { ReactNode } from "react";

type BottomNavigationTooltipParams = {
    href: string;
    children: ReactNode;
};

export default function BottomNavigationTooltip({
    href,
    children,
}: BottomNavigationTooltipParams) {
    return (
        <a
            href={href}
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
            {children}
        </a>
    );
}

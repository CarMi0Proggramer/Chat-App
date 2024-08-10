import { ReactNode } from "react";

type BottomNavigationTooltipParams = {
    tooltipId: string;
    title: string;
    children: ReactNode;
};

export default function BottomNavigationTooltip({
    tooltipId,
    title,
    children,
}: BottomNavigationTooltipParams) {
    return (
        <>
            <button
                data-tooltip-target={tooltipId}
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
                {children}
                <span className="sr-only">{title}</span>
            </button>
            <div
                id={tooltipId}
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
                {title}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </>
    );
}

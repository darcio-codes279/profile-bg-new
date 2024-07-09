import { cn } from "../../lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[4rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    image,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    image?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col",
                className
            )}
        >
            <div className="">{image}</div>
            <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-row align-items-center justify-center space-x-1.5">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-200/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent from-white to-slate-900/10 p-0">
                    {title}
                </span>
                <div className="">{icon}</div>
                <div>
                    <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                        {description}
                    </div>
                </div>
            </div>
            {header}
        </div>
    );
};

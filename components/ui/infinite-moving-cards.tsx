"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items = [],
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
    icon,
}: {
    items: {
        name: string;
        icon: any;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
    icon?: [React.ReactNode]
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap ",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-duration:80s] cursor-pointer"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="min-w-35 min-h-10 relative rounded-lg border bg-neutral-800 border-neutral-700 p-1 flex flex-col"
                        key={item.name}
                    >
                        <div className="flex gap-1 z-20 p-2 ">
                            <span className="items-center z-20 text-gray-100 border bg-neutral-700 border-neutral-700 rounded-lg p-2">
                                {item.icon}
                            </span>
                            <span className="flex gap-1 z-20 pt-2">
                                {item.name}
                            </span>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};

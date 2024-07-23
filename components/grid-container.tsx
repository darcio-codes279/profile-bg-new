"use client"

import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { metadata } from '@/app/metadata';
import PastWorks from "@/components/layout/pastWorks";
import { InfiniteMovingCardsDemo } from "./layout/tech-stack";
import { BackgroundGradientAnimationDemo } from "./layout/backgroundGradientDemo";
import Profile from "./layout/profile";
import Image from "next/image";
import SocialsIcons from "./layout/socialsIcons";
import BuyMeCoffee from "./layout/buyMeCoffee";
import EmailMe from "./layout/emailMe";
import OrbitingCircles from "./ui/orbiting-circles";
import { WorkExperience } from "./layout/workExperience";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { DirectionAwareHoverDemo } from "./layout/hoverImage";
import AboutMe from "./layout/aboutMe";
import { RxAvatar } from 'react-icons/rx'

export function BentoGridSecondDemo() {
    return (

        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]  grid md:grid-cols-6 md:grid-rows-6">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                    image={item.image}
                />
            ))}
        </BentoGrid>

    );
}

const IconComponent = metadata.section[0].icon;
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-neutral-100 dark:bg-black"></div>

);
const items = [
    {
        title: "Tech Stack",
        description: "",
        header: <InfiniteMovingCardsDemo />,
        className: "md:col-span-3 md:row-span-2 order-2",
        icon: <IconComponent size={28} />,
    },
    {
        title: "",
        description: "",
        header: "",
        className: "md:row-span-2 md:col-span-2 p-0 order-3",
        icon: "",
        image: <SocialsIcons />
    },
    {
        title: "",
        description: "",
        header: <BuyMeCoffee />,
        className: "md:col-span-1 order-6",
        icon: "",
    },
    {
        title: "",
        description: "",
        header: <EmailMe />,
        className: "md:col-start-6 md:row-start-2 order-6",
        icon: "",

    },
    {
        title: "",
        description:
            "",
        header: "",
        className: "md:row-span-2 md:row-start-3 md:p-0 hidden md:block",
        icon: "",
        image: <DirectionAwareHoverDemo />
    },
    {
        title: "",
        description: "",
        header: <Profile />,
        className: "md:col-span-3 md:row-span-2 md:row-start-3 order-1",
        icon: "",
    },
    {
        title: "About Me",
        description: "",
        header: <AboutMe />,
        className: "md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-3 md:block hidden",
        icon: <RxAvatar size={28} />,
        // image: <BackgroundGradientAnimationDemo />,
    },
    {
        title: "Latest Works",
        description: "",
        header: <PastWorks />,
        className: "md:col-span-3 md:row-span-2 md:row-start-5 order-4",
        icon: <MdOutlineWorkspacePremium size={28} />,
    },
    {
        title: "",
        description:
            "",
        header: <WorkExperience />,
        className: "md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-5 order-7 p-0",
        icon: "",
    },
];

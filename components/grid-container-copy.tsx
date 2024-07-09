import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Linkedin, Instagram, } from "lucide-react";
import { Mail, StickyNote, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import Image from "next/image";
import Profile from "./layout/profile";
import SwiperContainer from "./swiper";
import { ModeToggle } from "./ui/theme-toggle";

import { HiOutlineAtSymbol } from "react-icons/hi";
import SocialsIcons from "./layout/socialsIcons";
import BuyMeCoffee from "./layout/buyMeCoffee";
import { IoBriefcaseOutline } from "react-icons/io5";

import AboutMe from "./layout/aboutMe";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

// const GridItems: GridItem[] = [
//     { title: "Tech Stack", colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 1 },
//     { title: "CV Download + Email", colSpan: 2, rowSpan: 2, colStart: 4, rowStart: 1 },
//     { title: "LinkedIn", colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 1 },
//     { title: "Github", colSpan: 1, rowSpan: 1, colStart: 7, rowStart: 1 },
//     { title: "Instagram", colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 2 },
//     { title: "Twitter" },
//     { title: "Random"},
//     { title: "Darcio Massala"},
//     { title: "Random-2",},
//     { title: "View Works },
//     { title: "About Me"},
//     { title: "Buy me a coffee"},
//     { title: "Emoji"},
// ];

export const GridContainer: React.FC = () => {
    return (
        <div className="grid md:grid-cols-6 md:grid-rows-6 md:gap-4 gap-5 w-full md:max-w-7xl mx-auto">
            <Card className="row-span-1 col-span-2 md:col-span-3 md:row-span-2">
            </Card>
            <Card className=" row-span-1 col-span-2 md:row-span-2 md:col-span-2">
            </Card>
            <Card className="col-span-1">
            </Card>
            <Card className="row-span-1 md:col-start-6 md:row-start-2">
            </Card>
            <Card className="row-span-1 md:row-span-2 md:row-start-3">
            </Card>
            <Card className="row-span-1 md:col-span-3 md:row-span-2 md:row-start-3">
            </Card>
            <Card className="row-span-1 md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-3">
            </Card>
            <Card className="row-span-1 md:col-span-3 md:row-span-2 md:row-start-5">
            </Card>
            <Card className="row-span-1 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-5">
            </Card>
        </div>
    );
};
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
        <div className="grid md:grid-cols-6 md:grid-rows-6 gap-4 w-full max-w-7xl mx-auto">
            <Card className="row-span-1 col-span-2 md:col-span-3 md:row-span-2">

                {/* <TechStack /> */}
                <SwiperContainer />
            </Card>
            <Card className=" row-span-1 col-span-2 md:row-span-2 md:col-span-2">
                <div>
                    <SocialsIcons></SocialsIcons>
                </div>
            </Card>
            <Card className="col-span-1">
                <div className="flex justify-center w-full ">
                    <Image
                        src="/images/Logo.png"
                        alt="Description of the image"
                        width={150}
                        height={150}

                    />
                </div>
            </Card>
            <Card className="row-span-1 md:col-start-6 md:row-start-2">
                <div>
                    <BuyMeCoffee></BuyMeCoffee>
                </div>

            </Card>
            <Card className="row-span-1 md:row-span-2 md:row-start-3">
                <Image
                    src="/images/img1.jpeg"
                    alt="Description of the image"
                    width={10000}
                    height={10000}
                    className="w-full h-full object-cover rounded-lg"
                ></Image>
            </Card>
            <Card className="row-span-1 md:col-span-3 md:row-span-2 md:row-start-3">
                <Profile></Profile>
            </Card>
            <Card className="row-span-1 md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-3">
                <Image
                    src="/images/oliver-pecker-HONJP8DyiSM-unsplash.png"
                    alt="Picture of laptop"
                    width={10000}
                    height={10000}
                    className="w-full h-full object-cover rounded-lg"
                ></Image>
            </Card>
            <Card className="row-span-1 md:col-span-3 md:row-span-2 md:row-start-5">
                <div className="flex flex-col">
                    <div className='flex justify-center p-5'>
                        <h1 className="text-xl text-center text-pretty">View Works</h1>
                        <div className='pl-2'>
                            <IoBriefcaseOutline size={28} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="aspect-video max-h-[210px] max-w-[210px]">
                            <Image
                                src={'/images/view-works/torrinJoshua.png'}
                                alt="Past work"
                                width={10000}
                                height={10000}
                                className="w-full h-full object-cover rounded-lg"
                            ></Image>
                        </div>
                        <div className="relative">
                            <div className="">
                                <Button>View Work</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className="row-span-1 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-5">
                <AboutMe></AboutMe>
            </Card>
        </div>
    );
};
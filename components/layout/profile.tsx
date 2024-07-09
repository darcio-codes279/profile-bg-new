import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Mail, StickyNote, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image";
import { metadata } from "@/app/metadata";
import SwiperContainer from "../swiper";


const Profile = () => {
    return (
        <>
            <CardHeader className="p-2 group-hover/bento:translate-x-2 transition duration-200">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-6">
                        <div className="max-h-[60px] max-w-[60px]">
                            <Image
                                src={metadata.section[5].src}
                                alt="Description of the image"
                                width={100}
                                height={100}
                                className="rounded-full b dark:border-neutral-700"
                            ></Image>
                        </div>
                        {/* <Avatar>
                            <AvatarImage alt="User Avatar" src="/images/third.png" sizes="32" />
                            <AvatarFallback>DM</AvatarFallback>
                        </Avatar> */}
                        <div>
                            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-200/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent from-white to-slate-900/10 p-0">Darcio Massala</span>
                            <CardDescription className="pointer-events-none bg-gradient-to-b from-black to-gray-200/80 bg-clip-text text-left text-1xl font-semibold leading-none text-transparent from-white to-slate-900/10">Software Engineer</CardDescription>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="text-sm max-pb-2 pt-2">
                <SwiperContainer />
            </CardContent>
            <CardFooter className="place-content-center space-x-4">

                <HoverCard>
                    <HoverCardTrigger>
                        <Button>
                            <Download />
                        </Button>

                    </HoverCardTrigger>
                    <HoverCardContent>
                        <p className="text-center">Download CV</p>
                    </HoverCardContent>
                </HoverCard>

            </CardFooter>
        </>
    )
}

export default Profile
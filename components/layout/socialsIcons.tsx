import React from 'react'
import { metadata } from '@/app/metadata';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { Button } from '../ui/button';

import { HiOutlineAtSymbol } from "react-icons/hi2";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const SocialsIcons = () => {

    const handleClick = (url: string) => {
        window.open(url, "_blank");
    }

    const linkedInUrl = metadata.section[1].linkedinUrl
    const githubUrl = metadata.section[1].gitHubUrl
    const substackUrl = metadata.section[1].substackUrl

    const IconComponent1 = metadata.section[1].icon
    const IconComponent2 = metadata.section[1].social1
    const IconComponent3 = metadata.section[1].social2
    const IconComponent4 = metadata.section[1].social3


    return (
        <>
            <div className="flex justify-center p-3 space-x-1 group-hover/bento:translate-x-2 transition duration-200" >
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-200/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent from-white to-slate-900/10 p-0">{metadata.section[1].title}</span>
                <div><IconComponent1 size={28} />
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center space-y-4">


                    < HoverCard >
                        <HoverCardTrigger>
                            <Button className="p-3 w-48 justify-start" onClick={() => handleClick(linkedInUrl)}>
                                <div><IconComponent2 size={30}></IconComponent2></div>
                                <div><p className="pl-1">{metadata.section[1].linkedin}</p></div>
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p className="text-center">LinkedIn</p>
                        </HoverCardContent>
                    </HoverCard >

                    < HoverCard >
                        <HoverCardTrigger>
                            <Button className="w-48 justify-start" onClick={() => handleClick(githubUrl)}>
                                <div><IconComponent3 size={30}></IconComponent3></div>
                                <div><p className="pl-1">{metadata.section[1].github}</p></div>
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p className="text-center">GitHub</p>
                        </HoverCardContent>
                    </HoverCard >

                    < HoverCard >
                        <HoverCardTrigger>
                            <Button className="w-48 justify-start" onClick={() => handleClick(substackUrl)}>
                                <div><IconComponent4 size={30}></IconComponent4></div>
                                <div><p className="pl-1">{metadata.section[1].substack}</p></div>
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p className="text-center">Substack</p>
                        </HoverCardContent>
                    </HoverCard >



                </div>
            </div>
        </>

    )
}

export default SocialsIcons



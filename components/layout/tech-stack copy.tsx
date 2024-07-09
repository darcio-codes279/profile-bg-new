"use client";

import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";

import { DiJsBadge, DiGithubBadge, DiNodejs, DiPython } from "react-icons/di";
import {
    SiTypescript, SiHtml5, SiAmazonaws, SiAmazondynamodb, SiMysql,
    SiCss3, SiMongodb, SiRedux, SiNextdotjs, SiFigma, SiPowershell, SiLinux, SiYaml
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { GoStack } from "react-icons/go";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Icon } from 'lucide-react';

export function InfiniteMovingCardsDemo() {
    {
        testimonials.map((item, i) => (
            <InfiniteMovingCards
                key={i}
                items={testimonials}
                direction="left"
                speed="normal"
                icon={item.icon}
            />
        ))
    }
    return (
        <div className="h-[20rem] rounded-md flex flex-col bg-black bg-grid-white/[0.05] justify-center overflow-hidden">

        </div>
    );
}

const testimonials = [
    { name: 'JavaScript', icon: <DiJsBadge /> },
    { name: 'Python', icon: <DiPython /> },
    { name: 'GitHub', icon: <DiGithubBadge /> },
    { name: 'Node JS', icon: <DiNodejs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'AWS', icon: <SiAmazonaws /> },
    { name: 'DynamoDB', icon: <SiAmazondynamodb /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'PowerShell', icon: <SiPowershell /> },
    { name: 'Linux', icon: <SiLinux /> },
    { name: 'YAML', icon: <SiYaml /> },
    { name: 'React.js', icon: <RiReactjsFill /> },
    { name: 'Mysql', icon: <SiMysql /> },
];


// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 
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
import { RiReactjsFill } from "react-icons/ri";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const size = 15;
const testimonials = [
    { name: 'JavaScript', icon: <DiJsBadge size={size} /> },
    { name: 'Python', icon: <DiPython size={size} /> },
    { name: 'GitHub', icon: <DiGithubBadge size={size} /> },
    { name: 'Node JS', icon: <DiNodejs size={size} /> },
    { name: 'TypeScript', icon: <SiTypescript size={size} /> },
    { name: 'HTML5', icon: <SiHtml5 size={size} /> },
    { name: 'AWS', icon: <SiAmazonaws size={size} /> },
    { name: 'DynamoDB', icon: <SiAmazondynamodb size={size} /> },
    { name: 'CSS3', icon: <SiCss3 size={size} /> },

];

const testimonials2 = [
    { name: 'MongoDB', icon: <SiMongodb size={size} /> },
    { name: 'Redux', icon: <SiRedux size={size} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={size} /> },
    { name: 'Figma', icon: <SiFigma size={size} /> },
    { name: 'PowerShell', icon: <SiPowershell size={size} /> },
    { name: 'Linux', icon: <SiLinux size={size} /> },
    { name: 'YAML', icon: <SiYaml size={size} /> },
    { name: 'React.js', icon: <RiReactjsFill size={size} /> },
    { name: 'Mysql', icon: <SiMysql size={size} /> },
];

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[10rem] rounded-md flex flex-col bg-black bg-grid-white/[0.05] justify-center overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
                icon={testimonials.icon}
            />
            <InfiniteMovingCards
                items={testimonials2}
                direction="right"
                speed="slow"
                icon={testimonials2.icon}
            />
        </div>
    );
}



// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 
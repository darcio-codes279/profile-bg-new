'use client'

import { metadata } from '@/app/metadata';
// Import Swiper React components
import Image from 'next/image';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import Video from 'next-video';
import torrinJoshuaVid from 'https://storage.googleapis.com/darcio-bentofolio/tpt1.mp4';

const PastWorks = () => {
    return (
        <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <div className="flex items-center justify-center p-0">
                        <Video src={torrinJoshuaVid}>
                            {/* <Image
                                slot="poster"
                                src='https://storage.googleapis.com/darcio-bentofolio/torrinJoshua.png'
                                alt="Past Clients"
                                width={280}
                                height={280}
                            /> */}
                        </Video>

                    </div>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        // <div className="flex items-center justify-center p-0">
        //     <Image
        //         src="/images/view-works/torrinJoshua.png"
        //         alt="Past Clients"
        //         width={280}
        //         height={280}
        //         className="rounded-lg"
        //     ></Image>
        // </div>
    )
}

export default PastWorks

// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 
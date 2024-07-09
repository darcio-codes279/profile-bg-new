import React from 'react'
import { RxAvatar } from 'react-icons/rx'
import { Badge } from '@/components/ui/badge'

const AboutMe = () => {
    return (
        <div className="flex flex-col">
            <div className='flex justify-center p-5'>
                <h1 className="text-2xl text-center text-pretty">About Me</h1>
                <div className='pl-2'>
                    <RxAvatar size={28} />
                </div>
            </div>
            <div className="flex flex-wrap gap-2 m-6 ml-20 mr-20 border-2 rounded-3xl border-neutral-700 p-2 justify-center">
                <div className="">
                    <Badge>Manchester, UK</Badge>
                    <Badge>English/ Portuguese/ Spanish</Badge>
                    <Badge>Software Engineer</Badge>
                    <Badge>Full-Stack</Badge>
                    <Badge>DevOps</Badge>
                    <Badge>Economics + Technology</Badge>
                    <Badge>University of Leeds</Badge>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
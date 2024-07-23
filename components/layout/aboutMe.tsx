import React from 'react'
import { Badge } from '@/components/ui/badge'

const AboutMe = () => {
    return (
        <div className="flex flex-col">
            <div className='flex justify-center'>
            </div>
            <div className="flex flex-wrap gap-2 border-2 rounded-3xl border-neutral-700 p-2 justify-center mt-2">
                <div className="p-1 space-y-1 space-x-1">

                    {/* <Badge>English/ Portuguese/ Spanish</Badge> */}
                    <Badge>Full-Stack Engineer 👨🏿‍💻</Badge>
                    <Badge>Javascript</Badge>
                    <Badge>DevOps ☁️</Badge>
                    <Badge>BSc Economics 📈</Badge>
                    <Badge>Speaker 🎤</Badge>
                    <Badge>University of Leeds 👨🏿‍🎓</Badge>
                    <Badge>Manchester 🐝</Badge>
                    <Badge>UK 🇬🇧</Badge>
                </div>
            </div>
        </div >
    )
}

export default AboutMe
import React from 'react'
import Image from 'next/image';
import { ModeToggle } from './ui/theme-toggle';

const Header = () => {
    return (
        <div className="grid grid-cols-3 w-full flex justify-between" >
            <Image
                src="/images/Logo.png"
                alt="Description of the image"
                width={100}
                height={100}
            />
            <div>
                <h1 className="text-4xl text-center text-pretty">DARCIO MASSALA</h1>
            </div>
            <div className="text-right">
                <ModeToggle></ModeToggle>
            </div>
        </div>
    )
}

export default Header
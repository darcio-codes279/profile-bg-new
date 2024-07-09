import React from 'react'
import { SiBuymeacoffee } from 'react-icons/si'
import { Button } from "../ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const BuyMeCoffee = () => {
    return (
        <div className='flex flex-col justify-center p-3 space-x-1 items-center'>
            < HoverCard >
                <HoverCardTrigger>
                    <Button>
                        <SiBuymeacoffee size={30} />
                    </Button>

                </HoverCardTrigger>
                <HoverCardContent>
                    <p className="text-center">Buy me a Coffee</p>
                </HoverCardContent>
            </HoverCard >
        </div>
    )
}

export default BuyMeCoffee
"use client"

import {motion as m, useInView} from "framer-motion";
import React, {useRef} from "react";
import {Drill, Joystick, Rabbit} from "lucide-react";

const perks = [
    {
        name: "Quick Response Time",
        icon: Rabbit,
        description: "Service technicians are available 24 hours a day, 7 days a week to fix your machines."
    },
    {
        name: "Professional Installation",
        icon: Drill,
        description: "Our installers use correct cable management and clean the area accordingly."
    },
    {
        name: "Unlimited Selection",
        icon: Joystick,
        description: "We have a wide selection of fully restored pinball machines, retro arcade cabinets, and more."
    }
]

export const Perks = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    return <div
        className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'
        ref={ref}>
        {perks.map((perk, index) => (
            <m.div
                key={perk.name}
                animate={isInView && {y: 0}}
                initial={{y: "410%"}}
                transition={{delay: .5 + index / 2, duration: 0.5}}
                className='overflow-hidden text-center md:flex md:item-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                    <div
                        className='h-16 w-16 flex items-center justify-center rounded-full bg-orangeRetro border-blueRetro border-2'>
                        {<perk.icon className='w-1/3 h-1/3 text-blueRetro'/>}
                    </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                    <h1 className='md:text-lg text-base font-medium text-brownRetro'>
                        {perk.name}
                    </h1>
                    <p className='md:text-base mt-3 text-sm text-blueRetro'>
                        {perk.description}
                    </p>
                </div>
            </m.div>
        ))}
    </div>
}

export default Perks;
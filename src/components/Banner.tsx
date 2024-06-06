'use client'

import Image from "next/image";
import {motion as m} from "framer-motion";
import React, {ReactNode} from "react";

const Banner = ({
                    imgSrc,
                    children
                }: {
    imgSrc: string
    children: ReactNode
}) => {
    return <div className="relative w-full h-96 overflow-hidden shadow-lg border-grayRetro border-b-4"
             style={{borderBottomRightRadius: "100%", borderBottomLeftRadius: "100%"}}>
            <Image
                alt='Retro Arcade Background'
                src={imgSrc}
                fill
                style={{objectFit: "cover"}}/>
            <m.h1
                animate={{y: 0}}
                initial={{y: "115%"}}
                transition={{delay: 0.5, duration: 0.75}}
                className='mb-4 text-3xl md:text-4xl lg:text-6xl font-bold tracking-light text-grey-700 absolute flex inset-0 justify-center items-center drop-shadow-lg'>
                {children}
            </m.h1>
        </div>
}

export default Banner;
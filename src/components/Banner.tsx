import Image from "next/image";
import React, {ReactNode} from "react";

const Banner = ({
                    imgSrc,
                    blurURL,
                    children
                }: {
    imgSrc: string
    blurURL: string
    children: ReactNode
}) => {
    return <div className="relative w-full lg:h-96 sm:h-72 h-56 overflow-hidden shadow-lg border-grayRetro border-b-4"
             style={{borderBottomRightRadius: "100%", borderBottomLeftRadius: "100%"}}>
            <Image
                alt='Retro Arcade Background'
                src={imgSrc}
                priority={true}
                placeholder="blur"
                blurDataURL="data:..."
                fill
                style={{objectFit: "cover"}}
            />
            <h1
                className='mb-4 text-3xl md:text-4xl lg:text-6xl font-bold tracking-light text-grey-700 absolute flex inset-0 justify-center items-center drop-shadow-lg'>
                {children}
            </h1>
        </div>
}

export default Banner;
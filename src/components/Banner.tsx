import Image, {StaticImageData} from "next/image";
import React, {ReactNode} from "react";

const Banner = ({
                    imgSrc,
                    children
                }: {
    imgSrc: string
    children: ReactNode
}) => {
    return <div className="relative w-full lg:h-96 sm:h-72 h-56 overflow-hidden shadow-lg border-grayRetro border-b-4"
             style={{borderBottomRightRadius: "100%", borderBottomLeftRadius: "100%"}}>
            <Image
                alt='Retro Arcade Background'
                src={imgSrc}
                priority={true}
                fill
                style={{objectFit: "cover"}}
            />
            <h1
                className='mb-4 text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-6xl sm:font-bold tracking-light text-grey-700 absolute flex inset-0 justify-center items-center drop-shadow-lg'>
                {children}
            </h1>
        </div>
}

export default Banner;
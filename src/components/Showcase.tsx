"use client"

import Image from "next/image";
import {GALLERY} from "@/config";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Card, CardContent} from "@/components/ui/card";

const Showcase = () => {
    return <div className="mt-16">
        {GALLERY.map((item, index) => (
            <div key={item.value} className='py-4 sm:p-12'>
                <h1 className='text-center text-2xl text-brownRetro font-bold'>{item.name}</h1>
                <Carousel className='w-full'>
                    <CarouselContent>
                        {item.imgSrc.map((imgSrc) => (
                            <CarouselItem key={index} className='relative aspect-video items-center justify-center p-6'>
                                <Card className='rounded-3xl'>
                                    <CardContent
                                        className='relative aspect-video items-center justify-center p-6 bg-peachRetroOld shadow-lg rounded-3xl'>
                                        <Image
                                            src={imgSrc}
                                            alt={item.name}
                                            fill
                                            style={{objectFit: "contain"}}
                                        />
                                    </CardContent>
                                </Card>

                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='text-blueRetro sm:block hidden'/>
                    <CarouselNext className='text-blueRetro sm:block hidden'/>
                </Carousel>
            </div>
        ))}

    </div>
}

export default Showcase;
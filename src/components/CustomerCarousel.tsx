"use client"

import {Carousel, CarouselContent, CarouselItem} from "./ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll";
import {CAROUSEL_IMAGES} from "@/config";
import Image from "next/image";

const CustomerCarousel = () => {
    return (
        <div className='mb-24 bg-peachRetroOld rounded-3xl p-5 pt-0 shadow-md'>
            <div className="mx-auto w-1/3 pt-1 px-6 mb-4 overflow-hidden shadow-md bg-peachRetro"
                 style={{borderBottomRightRadius: "100%", borderBottomLeftRadius: "100%"}}>
                <h3 className='text-center mb-4 font-bold tracking-light text-grey-700 sm:text-xl'>
                    COMPANIES THAT TRUST US:
                </h3>
            </div>


            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                    duration: 300
                }}
                plugins={[
                    AutoScroll({
                        speed: 1,
                        stopOnInteraction: false
                    })
                ]}
                className='h-24 mx-auto'
            >
                <CarouselContent>
                    {CAROUSEL_IMAGES.map(item => (
                        <CarouselItem key={item.value} className="basis-1/3 lg:basis-1/4 relative h-20">
                            <Image
                                alt={item.name}
                                src={item.imgSrc}
                                fill
                                style={{objectFit: "contain"}}/>
                        </CarouselItem>

                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CustomerCarousel
"use client"

import {Carousel, CarouselContent, CarouselItem} from "./ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll";
import {CAROUSEL_IMAGES} from "@/config";
import Image from "next/image";

const CustomerCarousel = () => {
    return (
        <div className='pb-8 pt-10'>
            <h3 className='text-center mb-4 text-2xl font-bold tracking-light text-grey-900 sm:text-4xl'>
                Our Clients Include:
            </h3>


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
                className='h-24 mx-auto max-w-5xl'
            >
                <CarouselContent>
                    {CAROUSEL_IMAGES.map(item => (
                        <CarouselItem key={item.value} className="basis-1/3 lg:basis-1/4 relative h-20">
                            <Image alt={item.name} src={item.imgSrc} fill objectFit="contain"/>
                        </CarouselItem>

                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CustomerCarousel
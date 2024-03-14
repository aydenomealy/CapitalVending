"use client"

import {Carousel, CarouselContent, CarouselItem} from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay";

const CustomerCarousel = () => {
    return (
        <Carousel
            opts={{
                align: "center",
                loop: true,
                duration: 300
            }}
            plugins={[
                Autoplay({
                    delay: 2500,
                }),
            ]}
            className='h-24 mx-auto max-w-7xl'
        >
            <CarouselContent>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">1</CarouselItem>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">2</CarouselItem>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">3</CarouselItem>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">4</CarouselItem>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">5</CarouselItem>
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">6</CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}

export default CustomerCarousel
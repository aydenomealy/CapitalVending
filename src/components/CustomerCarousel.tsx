import {Carousel, CarouselContent, CarouselItem} from "./ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll";
import {CAROUSEL_IMAGES} from "@/config";
import Image from "next/image";

const CustomerCarousel = () => {
    return (
        <div className='mb-24 relative bg-peachRetroOld rounded-3xl p-5 pt-0 shadow-md border-2 border-grayRetro'>
            <div className="mx-auto xl:w-1/3 md:w-1/2 w-2/3 pt-1 px-6 mb-4 bg-peachRetro border-2 border-t-0 border-grayRetro absolute left-0 right-0 -top-0.5 "
                 style={{borderBottomRightRadius: "100%", borderBottomLeftRadius: "100%"}}>
                <h3 className='text-center mb-4 font-bold tracking-light text-grey-700 xl:text-xl lg:text-lg text-base'>
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
                className='h-24 mx-auto mt-14'
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
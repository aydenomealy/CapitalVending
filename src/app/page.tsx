"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {Drill, Joystick, Rabbit} from "lucide-react";
import React, {useRef} from "react";
import CustomerCarousel from "@/components/CustomerCarousel";
import Image from "next/image";
import ProductsCards from "@/components/ProductsCards";
import {motion as m, useInView} from "framer-motion";

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
export default function Home() {

    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <m.div initial={{opacity: 0}}
               animate={{opacity: 1}}
               transition={{duration: 0.75}}>
            <div className="relative w-full h-96 overflow-hidden shadow-lg border-grayRetro border-b-4"
                 style={{borderBottomRightRadius: "100%", borderBottomLeftRadius: "100%"}}>
                <Image
                    alt='Retro Arcade Background'
                    src='/backgrounds/arcadeBackground.png'
                    fill
                    style={{objectFit: "cover"}}/>
                <m.h1
                    animate={{y: 0}}
                    initial={{y: "115%"}}
                    transition={{delay: 0.5, duration: 0.75}}
                    className='mb-4 text-3xl md:text-4xl lg:text-6xl font-bold tracking-light text-grey-700 absolute flex inset-0 justify-center items-center drop-shadow-lg'>
                    Quality&nbsp;
                    <span className='text-redRetro font-outline-2'> Amusement </span>
                    &nbsp;Services
                </m.h1>
            </div>

            <MaxWidthWrapper>
                <div className='pt-10 pb-44 mx-auto text-center flex flex-col items-center max-w-5xl'>
                    <div className='overflow-hidden p-1'>

                    </div>
                    <p className='mb-6 md:text-2xl text-lg max-w-prose text-brownRetro font-medium'>
                        Capital Vending Company has been providing quality amusement services to
                        Harrisburg, Pennsylvania for over 50 years. We have built a strong reputation through our
                        exceptional value, superior selection of machines, as well as fast and friendly
                        service. From coin-operated entertainment to rental equipment for big celebrations,
                        you&apos;ll be sure to find everything you need!
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                        <Link href='/contact' className={buttonVariants()}>Contact us today</Link>
                        <Button asChild variant='secondary'>
                            <Link href='/products'>Products & Services &rarr;</Link>
                        </Button>
                    </div>
                </div>
            </MaxWidthWrapper>

            <section className='border-grayRetro border-t-2 border-b-2 bg-peachRetroOld shadow-2xl overflow-hidden'>
                <MaxWidthWrapper className='py-16'>
                    <div
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
                                        {<perk.icon className='w-1/3 h-1/3 text-blueRetro '/>}
                                    </div>
                                </div>
                                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                                    <h3 className='md:text-lg text-base font-medium text-brownRetro'>
                                        {perk.name}
                                    </h3>
                                    <p className='md:text-base mt-3 text-sm text-blueRetro'>
                                        {perk.description}
                                    </p>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>


            <MaxWidthWrapper>
                <ProductsCards/>
            </MaxWidthWrapper>

            <div
                className='h-80 w-full relative my-44 '
                style={{
                    clipPath: 'inset(0 0 0 0)',
                }}
            >
                <div className='fixed h-full w-full sm:top-16 top-24 '>
                    <Image
                        alt='Pool table background'
                        src='/backgrounds/poolbackground.jpg'
                        fill
                        style={{objectFit: "cover"}}
                        className=''
                    />
                </div>

                <div
                    className='text-grayRetro tracking-tight absolute flex flex-col inset-0 justify-center items-center border-t-2 border-b-2 border-grayRetro'>
                    <h1 className='text-4xl md:text-6xl font-extrabold font-outline-2'>
                        Level Up Your Business
                    </h1>
                    <h2 className='text-2xl md:text-3xl font-bold'>
                        ────
                        <span className="font-outline-1"> Partner with Capital Vending </span>
                        ────
                    </h2>
                </div>
            </div>

            <MaxWidthWrapper>
                <CustomerCarousel/>
            </MaxWidthWrapper>

        </m.div>
    )
}

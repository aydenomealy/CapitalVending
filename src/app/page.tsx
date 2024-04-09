"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {Drill, Joystick, Rabbit} from "lucide-react";
import React from "react";
import CustomerCarousel from "@/components/CustomerCarousel";
import Image from "next/image";
import ProductsCards from "@/components/ProductsCards";
import {motion as m} from "framer-motion";

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
    return (
        <m.div initial={{opacity: 0}} animate={{opacity: 1}}
               transition={{duration: 0.75}}>
            <MaxWidthWrapper>
                <div className='py-20 mx-auto text-center flex flex-col items-center max-w-5xl'>
                    <div className='overflow-hidden p-1'>
                        <m.h1
                            animate={{y: 0}}
                            initial={{y: "115%"}}
                            transition={{delay: 0.5, duration: 0.5}}
                            className='mb-4 text-4xl font-bold tracking-light text-grey-700 sm:text-6xl'>
                            Quality
                            <span className='text-redRetro'> vending machine </span>
                            services
                        </m.h1>
                    </div>
                    <p className='mt-6 text-lg max-w-prose text-brownRetro'>
                        Capital Vending Company has been providing quality vending machine services to
                        Harrisburg, Pennsylvania for over 50 years. We have built a reputation by our
                        exceptional value, superior selection of machines as well as fast and friendly
                        service. From coin-operated entertainment to rental equipment for big celebrations,
                        you&apos;ll be sure to find everything you need!
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                        <Link href='/contact' className={buttonVariants()}>Contact us today</Link>
                        <Button asChild variant='blue'>
                            <Link href='/products'>Products & Services &rarr;</Link>
                        </Button>
                    </div>
                </div>
            </MaxWidthWrapper>

            <MaxWidthWrapper>
                <ProductsCards/>
            </MaxWidthWrapper>

            <div
                className='h-80 w-full relative mb-24'
                style={{
                    clipPath: 'inset(0 0 0 0)',
                }}
            >
                <div className='fixed h-full w-full sm:top-16 top-44'>
                    <Image
                        alt='Pool table background'
                        src='/backgrounds/poolbackground.jpg'
                        fill
                        style={{objectFit: "cover"}}
                    />
                </div>
            </div>


            <section className='border-t-4 border-redRetro bg-blueRetro border-b-4 shadow-2xl overflow-hidden'>
                <MaxWidthWrapper className='py-20'>
                    <div
                        className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
                        {perks.map((perk, index) => (
                            <m.div
                                key={perk.name}
                                animate={{y: 0}}
                                initial={{y: "160%"}}
                                transition={{delay: 0.5 + index/2, duration: 0.5}}
                                className='overflow-hidden text-center md:flex md:item-start md:text-left lg:block lg:text-center'>
                                <div className='md:flex-shrink-0 flex justify-center'>
                                    <div
                                        className='h-16 w-16 flex items-center justify-center rounded-full bg-orangeRetro border-brownRetro border-2'>
                                        {<perk.icon className='w-1/3 h-1/3 text-blueRetro'/>}
                                    </div>
                                </div>
                                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                                    <h3 className='text-base font-medium text-grayRetro'>
                                        {perk.name}
                                    </h3>
                                    <p className='mt-3 text-sm text-orangeRetro'>
                                        {perk.description}
                                    </p>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>
            <CustomerCarousel/>
        </m.div>
    )
}

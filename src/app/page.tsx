import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {intersection} from "ts-interface-checker";
import {Drill, Joystick, Rabbit} from "lucide-react";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import React from "react";
import ProductTabs from "@/components/ProductTabs";
import CustomerCarousel from "@/components/CustomerCarousel";

const perks = [
    {
        name: "Quick Response Time",
        icon: Rabbit,
        description: "Service technicians are available at all times to fix your machines."
    },
    {
        name: "Professional Installation",
        icon: Drill,
        description: "Our installers use correct cable management and clean the area accordingly."
    },
    {
        name: "Unlimited Selection",
        icon: Joystick,
        description: "We have a wide selection of fully restored pinball machines and retro arcade cabinets."
    }
]
export default function Home() {
    return (
        <>
            <MaxWidthWrapper>
                <div className='py-20 mx-auto text-center flex flex-col items-center max-w-5xl'>
                    <h1 className='mb-4 text-4xl font-bold tracking-light text-grey-900 sm:text-6xl'>
                        Quality
                        <span className='text-red-600'> vending machine </span>
                        services
                    </h1>
                    <p className='mt-6  max-w-prose text-muted-foreground'>
                        Capital Vending Company has been providing quality vending machine services to
                        Harrisburg, Pennsylvania for over 50 years. We have built a reputation by our
                        exceptional value, superior selection of machines as well as fast and friendly
                        service. From coin-operated entertainment to rental equipment for big celebrations,
                        you&apos;ll be sure to find everything you need!
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                        <Link href='/contact' className={buttonVariants()}>Contact us today</Link>
                        <Button asChild variant='ghost'>
                            <Link href='/'>Products & Services &rarr;</Link>
                        </Button>
                    </div>
                </div>
            </MaxWidthWrapper>

            {/*<MaxWidthWrapper className='mb-8'>*/}
            {/*    <ProductTabs/>*/}
            {/*</MaxWidthWrapper>*/}

            <section className='border-t border-gray-200 bg-gray-50 border-b'>
                <MaxWidthWrapper className='py-20'>
                    <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
                        {perks.map((perk) => (
                            <div key={perk.name} className='text-center md:flex md:item-start md:text-left lg:block lg:text-center'>
                                <div className='md:flex-shrink-0 flex justify-center'>
                                    <div className='h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-900'>
                                        {<perk.icon className='w-1/3 h-1/3' />}
                                    </div>
                                </div>
                                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                                    <h3 className='text-base font-medium text-grey-900'>
                                        {perk.name}
                                    </h3>
                                    <p className='mt-3 text-sm text-muted-foreground'>
                                        {perk.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>

            <MaxWidthWrapper>
                <CustomerCarousel/>
            </MaxWidthWrapper>
        </>
    )
}

"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ContactForm from "@/components/ContactForm";
import React from "react";
import {motion as m} from "framer-motion";
import Image from "next/image";

export default function Home() {
    return (<div>
            <div className="relative w-full h-96 overflow-hidden"
                 style={{borderBottomRightRadius: "100%", borderBottomLeftRadius: "100%"}}>
                <Image
                    alt='Retro Arcade Background'
                    src='/backgrounds/arcadeBackground3.jpg'
                    fill
                    style={{objectFit: "cover"}}/>
                <m.h1
                    animate={{y: 0}}
                    initial={{y: "115%"}}
                    transition={{delay: 0.25, duration: 0.75}}
                    className='mb-4 text-3xl md:text-4xl lg:text-6xl font-bold font-outline-2 text-redRetro absolute flex inset-0 justify-center items-center drop-shadow-lg'>
                    Contact Us
                </m.h1>
            </div>


            <MaxWidthWrapper>
                <div className='overflow-hidden'>
                    <div className='pt-10 pb-10 mx-auto text-center flex flex-col items-center max-w-3xlgit '>
                        <p className='mt-6 max-w-prose text-brownRetro text-lg font-medium'>
                            Choose from our large selection of coin-operated games, jukeboxes, vending machines and so
                            much
                            more!
                            Our highly trained service technicians are available
                            <span className='font-bold text-redRetro'> 24 hours a day, 7 days a week </span>
                            to provide you with quality, dependable service you can count on. To contact us, please fill
                            out the form below
                            or give us a ring at 717-558-9921.
                        </p>
                    </div>

                    <m.div
                        animate={{y: 0}}
                        initial={{y: "100%"}}
                        transition={{delay: 0.75, duration: 0.5}}
                        className='mx-auto flex flex-col items-center max-w-4xl overflow-hidden'>
                        <ContactForm/>
                    </m.div>
                </div>
            </MaxWidthWrapper>
        </div>



    )
}
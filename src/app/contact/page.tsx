"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ContactForm from "@/components/ContactForm";
import React from "react";
import {motion as m} from "framer-motion";

export default function Home() {
    return (<MaxWidthWrapper>
            <div className='pt-20 pb-5 mx-auto text-center flex flex-col items-center max-w-3xl'>
                <div className='overflow-hidden p-1'>
                    <m.h1
                        animate={{y: 0}}
                        initial={{y: "115%"}}
                        transition={{delay: 0.25, duration: 0.5}}
                        className='text-4xl font-bold tracking-light text-grey-900 sm:text-6xl'>
                        Contact Us
                    </m.h1>
                </div>
                <p className='mt-6 max-w-prose text-brownRetro text-lg'>
                    Choose from our large selection of coin-operated games, jukeboxes, vending machines and so much
                    more!
                    Our highly trained service technicians are available
                    <span className='font-bold text-redRetro'> 24 hours a day, 7 days a week </span>
                    to provide you with quality, dependable service you can count on. Please fill out the form below or give us a ring at 717-558-9921.
                </p>


            </div>
            <m.div
                animate={{x: 0}}
                initial={{x: "-125%"}}
                transition={{delay: 0.75, duration: 0.5}}
                className='mx-auto flex flex-col items-center max-w-4xl overflow-hidden'>
                <ContactForm/>
            </m.div>
        </MaxWidthWrapper>
    )
}
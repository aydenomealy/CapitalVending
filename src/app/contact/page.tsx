"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ContactForm from "@/components/ContactForm";
import React from "react";
import {motion as m} from "framer-motion";
import Banner from "@/components/Banner";

export default function Home() {
    return (<div>
            <Banner imgSrc='/backgrounds/arcadeBackground3.jpg'>
                Contact Us
            </Banner>


            <MaxWidthWrapper>
                <div className='overflow-hidden pb-16'>
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
                        initial={{y: "110%"}}
                        transition={{delay: 0.75, duration: 0.5}}
                        className='mx-auto flex flex-col items-center max-w-4xl overflow-hidden'>
                        <ContactForm/>
                    </m.div>
                </div>
            </MaxWidthWrapper>
        </div>



    )
}
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ContactForm from "@/components/ContactForm";
import React from "react";
import {Icons} from "@/components/Icons";

export default function Home() {
    return (<MaxWidthWrapper>
            <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
                <h1 className='text-4xl font-bold tracking-light text-grey-900 sm:text-6xl'>Contact Us</h1>
                <p className='mt-6  max-w-prose text-muted-foreground'>
                    Choose from our large selection of coin-operated games, jukeboxes, vending machines and so much
                    more!
                    Our highly trained service technicians are available
                    <span className='font-bold text-black'> 24 hours a day, 7 days a week </span>
                    to provide you with quality, dependable service you can count on. Please fill out the form below or give us a ring at 717-558-9921.
                </p>

                <ContactForm/>
            </div>
        </MaxWidthWrapper>
    )
}
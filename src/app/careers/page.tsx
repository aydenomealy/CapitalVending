import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CareerForm from "@/components/CareerForm";
import React from "react";

export default function Home() {
    return (
        <MaxWidthWrapper>
            <div className='overflow-hidden pb-16'>
                <div className='pt-20 pb-5 mx-auto text-center flex flex-col items-center max-w-3xl'>
                    <div className='overflow-hidden p-1'>
                        <h1
                            className='text-4xl font-bold tracking-light text-grey-900 sm:text-6xl'>
                            Careers
                        </h1>
                    </div>

                    <p className='mt-6 max-w-prose text-brownRetro text-lg font-medium'>
                        Join our team and have a rewarding career in the vending and amusement industry. We offer competitive compensation, affordable benefits including 401K with employer matching, & paid time off. Please submit your resume below and we will reach out.
                    </p>
                </div>

                <div
                    className='mx-auto flex flex-col items-center max-w-4xl overflow-hidden'>
                    <CareerForm/>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}
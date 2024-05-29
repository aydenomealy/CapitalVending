import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {PRODUCTS} from "@/config";
import React from "react";
import Image from "next/image";
import {motion as m} from "framer-motion";

export default function Page({params}: { params: { prod: number } }) {
    return (<>
            <div className="relative w-full h-96 overflow-hidden"
                 style={{borderBottomRightRadius: "100%", borderBottomLeftRadius: "100%"}}>
                <Image
                    alt='Product Image'
                    src={PRODUCTS[params.prod].imageSrc}
                    fill
                    style={{objectFit: "cover"}}/>
                <h1
                    className='mb-4 text-3xl md:text-4xl lg:text-6xl font-bold tracking-light text-grey-700 absolute flex inset-0 justify-center items-center drop-shadow-lg'>
                    {PRODUCTS[params.prod].name}
                </h1>
            </div>

            <MaxWidthWrapper className='py-20 items-center'>
                <div className='grid sm:grid-cols-3 h-full grid-cols-2'>
                    <div
                        className='overflow-hidden relative lg:aspect-video aspect-square rounded-lg'>
                        <Image
                            src={PRODUCTS[params.prod].imageSrc}
                            alt='product catagory image'
                            fill
                            className='object-cover object-center'
                        />
                    </div>
                    <div className='sm:col-span-2 text-left ml-5 mr-2'>
                        <p className='md:text-base text-sm'>
                            {PRODUCTS[params.prod].description}
                        </p>
                    </div>
                </div>
            </MaxWidthWrapper>
        </>
    )
}
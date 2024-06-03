import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {PRODUCTS, PRODUCTS2} from "@/config";
import React from "react";
import Image from "next/image";
import {motion as m} from "framer-motion";
import {Card, CardContent} from "@/components/ui/card";

export default function Page({params}: { params: { prod: number } }) {
    return (<>
            <div className="relative w-full h-96 overflow-hidden shadow-md"
                 style={{borderBottomRightRadius: "100%", borderBottomLeftRadius: "100%"}}>
                <Image
                    alt='Product Image'
                    src={PRODUCTS2[params.prod].headerImg}
                    fill
                    style={{objectFit: "cover"}}/>
                <h1
                    className='mb-4 text-3xl md:text-4xl lg:text-6xl font-bold tracking-light text-grey-700 absolute flex inset-0 justify-center items-center drop-shadow-lg'>
                    {PRODUCTS2[params.prod].name}
                </h1>
            </div>

            <MaxWidthWrapper className='py-20 items-center'>
                <div className='font-medium text-brownRetro md:text-2xl text-lg pb-24'>
                    {PRODUCTS2[params.prod].description}
                </div>

                {PRODUCTS2[params.prod].subSections.map((prod, index) => (
                    <Card key={prod.name}
                          className='sm:text-base text-sm bg-peachRetroOld border-peachRetroOld border-2 mb-5 group shadow-lg'>
                        <CardContent
                            className='mt-6 pr-3'>
                            <div className='grid sm:grid-cols-3 h-full grid-cols-2'>
                                <div
                                    className='overflow-hidden relative lg:aspect-video aspect-square rounded-lg group-odd:hidden'>
                                    <Image
                                        src={prod.imageSrc}
                                        alt='product catagory image'
                                        fill
                                        className='object-cover object-center'
                                    />
                                </div>
                                <div className='sm:col-span-2 text-left ml-5 mr-2 text-brownRetro'>
                                    <div className='xl:text-2xl md:text-lg font-medium mb-5 '>
                                        {prod.name}
                                    </div>
                                    <p className='xl:text-lg md:text-base text-sm'>
                                        {prod.description}
                                    </p>
                                </div>
                                <div
                                    className='overflow-hidden relative lg:aspect-video aspect-square rounded-lg group-even:hidden'>
                                    <Image
                                        src={prod.imageSrc}
                                        alt='product catagory image'
                                        fill
                                        className='object-cover object-center'
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    // <div>
                    //     <div
                    //         className='overflow-hidden relative lg:aspect-video aspect-square rounded-lg'>
                    //         <Image
                    //             src={prod.imageSrc}
                    //             alt='product catagory image'
                    //             fill
                    //             className='object-cover object-center'
                    //         />
                    //     </div>
                    //     <div className='sm:col-span-2 text-left ml-5 mr-2'>
                    //         <p className='md:text-base text-sm'>
                    //             {prod.description}
                    //         </p>
                    //     </div>
                    // </div>
                ))}
            </MaxWidthWrapper>
        </>
    )
}
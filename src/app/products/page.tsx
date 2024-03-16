import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductTabs from "@/components/ProductTabs";
import React from "react";

export default function Home() {
    return (
        <MaxWidthWrapper className='py-20 items-center'>
            <h1 className='text-center mb-16 text-4xl font-bold tracking-light text-grey-900 sm:text-6xl'>
                Products and Services
            </h1>

            <ProductTabs/>
        </MaxWidthWrapper>
    )
}
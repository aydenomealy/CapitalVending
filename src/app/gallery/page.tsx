import React from "react";
import Showcase from "@/components/Showcase";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Banner from "@/components/Banner";

export default function Page() {
    return (<div>
            <Banner imgSrc='/backgrounds/arcadeBackground.webp'>
                Gallery
            </Banner>

            <MaxWidthWrapper>
                <div className='pt-10 md:text-2xl text-center text-lg text-brownRetro font-medium'>
                    <h2>We always put 110% into every install but here are a few of our favorites.</h2>
                </div>
                <Showcase/>
            </MaxWidthWrapper>

        </div>
    )
}
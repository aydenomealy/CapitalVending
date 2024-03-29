import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Icons} from "@/components/Icons";
import {Phone} from "lucide-react";
import NavItems from "@/components/NavItems";
import MobileNav from "@/components/MobileNav";

const Navbar = () => {
    return (
        <div className='bg-bluePrimary sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-bluePrimary'>
                <div className='border-b-4 border-redSecondary'>
                    <MaxWidthWrapper>

                        <div className='flex h-24 items-center'>
                            <div className='ml-4 flex lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo className='h-20 w-20'/>
                                </Link>
                            </div>

                            <div className='z-50 ml-8 block self-stretch '>
                                <NavItems/>
                            </div>

                            <MobileNav/>

                            <div className='ml-auto flex items-center'>
                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>

                                    <div className='text-lg text-grayBackground items-center justify-center'>
                                        <Phone className='inline mr-3 text-redSecondary'/>
                                        717-558-9921
                                    </div>

                                </div>
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </header>
        </div>
    )
}

export default Navbar
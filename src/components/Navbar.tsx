import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Icons} from "@/components/Icons";
import {Phone} from "lucide-react";
import NavItems from "@/components/NavItems";
import MobileNav from "@/components/MobileNav";

const Navbar = () => {
    return (
        <div className='bg-blueRetro sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-blueRetro'>
                <div className='border-b-4 border-redRetro'>
                    <MaxWidthWrapper>
                        <div className='flex h-24 items-center'>
                            <MobileNav/>
                            <div className='ml-4 flex lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo className='h-20 w-20'/>
                                </Link>
                            </div>

                            <div className='hidden z-50 ml-8 lg:block self-stretch'>
                                <NavItems/>
                            </div>

                            <div className='ml-auto flex items-center'>
                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>

                                    <div className='text-lg text-grayRetro items-center justify-center'>
                                        <Phone className='inline mr-3 text-redRetro'/>
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
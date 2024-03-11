import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Icons} from "@/components/Icons";
import {Phone} from "lucide-react";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-white'>
                <MaxWidthWrapper>
                    <div className='border-b border-red-300'>
                        <div className='flex h-24 items-center'>

                            <div className='ml-4 flex lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo className='h-20 w-20'/>
                                </Link>
                            </div>

                            <div className='z-50 ml-8 block self-stretch '>
                                <NavItems/>
                                {/*<div className='flex gap-4 h-full items-center relative'>*/}
                                {/*    <Link href='/about' className={buttonVariants({'variant':'ghost'})}>About</Link>*/}
                                {/*    <Link href='/contact' className={buttonVariants({'variant':'ghost'})}>Contact</Link>*/}
                                {/*    <Link href='/careers' className={buttonVariants({'variant':'ghost'})}>Careers</Link>*/}
                                {/*</div>*/}
                            </div>

                            <div className='ml-auto flex items-center'>
                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>

                                    <div className='text-lg text-muted-foreground items-center justify-center'>
                                         <Phone className='inline mr-3 text-red-600'/>
                                        717-558-9921
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar
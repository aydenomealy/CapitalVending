import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const Footer = () => {

    return (
        <footer className='bg-blueRetro border-t-2 border-redRetro flex-grow-0'>
            <MaxWidthWrapper>
                <div className='py-10 md:flex md:items-center md:justify-between'>
                    <div className='text-center md:text-left'>
                        <p className='text-sm text-grayRetro'>
                            &copy; {new Date().getFullYear()} All Rights
                            Reserved
                        </p>
                    </div>

                    <div className='mt-4 flex items-center justify-center md:mt-0'>
                        <div className='flex space-x-8'>
                            <Link
                                href='#'
                                className='text-sm text-grayRetro hover:text-muted-foreground'>
                                Terms
                            </Link>
                            <Link
                                href='#'
                                className='text-sm text-grayRetro hover:text-muted-foreground'>
                                Privacy Policy
                            </Link>
                            <Link
                                href='#'
                                className='text-sm text-grayRetro hover:text-muted-foreground'>
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer
'use client'

import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {Menu, Phone, X} from "lucide-react";
import {NAV_ITEMS} from "@/config";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [activeIndex, setActiveIndex] = useState<number>(0)

    const pathname = usePathname()

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    const closeOnCurrent = (href: string) => {
        if (pathname === href) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        if (isOpen)
            document.body.classList.add('overflow-hidden')
        else
            document.body.classList.remove('overflow-hidden')
    }, [isOpen])

    if (!isOpen)
        return (
            <button
                type='button'
                onClick={() => setIsOpen(true)}
                className='lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'>
                <Menu className='h-6 w-' aria-hidden='true'></Menu>
            </button>
        )

    return (
        <div>
            <div className='relative z-40 lg:hidden'>
                <div className='fixed inset-0 bg-black bg-opacity-25'/>
            </div>

            <div className='fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex'>
                <div className='w-1/2'>
                    <div
                        className='relative flex w-full max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl min-h-full'>
                        <div className='flex px-4 pb-2 pt-5'>
                            <button
                                type='button'
                                onClick={() => setIsOpen(false)}
                                className='relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'>
                                <X className='h-6 w-6' aria-hidden='true'/>
                            </button>
                        </div>

                        <div className='mt-2'>
                            <ul>
                                {NAV_ITEMS.map((category) => (
                                    <li
                                        key={category.value}
                                        className='px-4 py-4'>
                                        <div className='-mb-px flex'>
                                            <p className='text-gray-900 flex-1 whitespace-nowrap py-4 text-base font-medium'>
                                                <Button asChild
                                                        variant={activeIndex === category.num ? 'secondary' : 'ghost'}>
                                                    <Link href={category.href}
                                                          onClick={() => setActiveIndex(category.num)}>{category.name}</Link>
                                                </Button>
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                            <div className='flow-root text-lg text-muted-foreground items-center justify-center'>
                                <Phone className='inline mr-3 text-red-900'/>
                                717-558-9921
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
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
                aria-label='Navigation Menu'
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

            <div className='fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex '>
                <div className='w-2/5'>
                    <div
                        className='relative flex w-full max-w-sm flex-col overflow-y-auto pb-12 shadow-xl min-h-full bg-peachRetro'>
                        <div className='flex px-4 pb-2 pt-5'>
                            <button
                                type='button'
                                onClick={() => setIsOpen(false)}
                                className='relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-600'>
                                <X className='h-6 w-6' aria-hidden='true'/>
                            </button>
                        </div>

                        <div className='mt-2'>
                            <ul>
                                {NAV_ITEMS.map((category) => (
                                    <li
                                        key={category.value}
                                        className='px-4 py-2'>
                                        <div className='-mb-px'>
                                            <p className='text-gray-900 text-base font-medium'>
                                                <Button asChild
                                                        variant={activeIndex === category.num ? 'default' : 'secondary'}>
                                                    <Link href={category.href}
                                                          onClick={() => setActiveIndex(category.num)}
                                                          className='w-full text-left justify-stretch'>{category.name}</Link>
                                                </Button>
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                            <div
                                className='text-gray-600 flow-root text-lg text-muted-foreground items-center justify-center'>
                                <Phone className='inline mr-3 text-redRetro'/>
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
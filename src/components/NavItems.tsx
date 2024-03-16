"use client"
import {useState} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    return (
        <div className='flex gap-4 h-full items-center relative'>
            <Button asChild variant={activeIndex === 0 ? 'secondary' : 'ghost'}>
                <Link href='/' onClick={() => setActiveIndex(0)}>Home</Link>
            </Button>
            <Button asChild variant={activeIndex === 1 ? 'secondary' : 'ghost'}>
                <Link href='/products' onClick={() => setActiveIndex(1)}>Products & Services</Link>
            </Button>
            <Button asChild variant={activeIndex === 2 ? 'secondary' : 'ghost'}>
                <Link href='/about' onClick={() => setActiveIndex(2)}>About</Link>
            </Button>
            <Button asChild variant={activeIndex === 3 ? 'secondary' : 'ghost'}>
                <Link href='/contact' onClick={() => setActiveIndex(3)}>Contact</Link>
            </Button>
            <Button asChild variant={activeIndex === 4 ? 'secondary' : 'ghost'}>
                <Link href='/careers' onClick={() => setActiveIndex(4)}>Careers</Link>
            </Button>
        </div>
    )
}

export default NavItems
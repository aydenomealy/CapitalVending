"use client"
import {useState} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {NAV_ITEMS} from "@/config";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    return (
        <div className='flex gap-4 h-full items-center relative'>
            {NAV_ITEMS.map((item) => (
                <Button key={item.value} asChild variant={activeIndex === item.num ? 'blue' : 'ghost'}>
                    <Link href={item.href} onClick={() => setActiveIndex(item.num)}>{item.name}</Link>
                </Button>
            ))}
        </div>
    )
}

export default NavItems
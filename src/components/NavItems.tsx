import Link from "next/link";
import {Button} from "@/components/ui/button";
import {NAV_ITEMS} from "@/config";

const NavItems = () => {

    return (
        <div className='flex gap-4 h-full items-center relative '>
            {NAV_ITEMS.map((item) => (
                <Button key={item.value} asChild variant='outline'>
                    <Link href={item.href}>{item.name}</Link>
                </Button>
            ))}
        </div>
    )
}

export default NavItems
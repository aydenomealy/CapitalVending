import {PRODUCTS2} from "@/config";
import Image from "next/image";
import {motion as m} from "framer-motion";
import Link from "next/link";


const ProductsCards = () => {
    return (
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 pt-44 px-10 md:px-0 lg:px-10 drop-shadow-xl'>
            {PRODUCTS2.map((item, index) => (
                <Link key={item.label}
                      href={"/products/" + index}
                     className="relative group rounded-lg overflow-hidden aspect-video border-grayRetro border-2 hover:cursor-pointer">
                    <Image
                        alt={item.name}
                        src={item.headerImg}
                        fill
                        className='object-cover object-center'
                    />
                    <div
                        className='text-grayRetro font-outline-1 text-2xl lg:text-3xl font-extrabold absolute flex inset-0 justify-center items-end drop-shadow-2xl'>
                        {item.name}
                    </div>
                    <m.div
                        initial={{opacity: 0}}
                        whileHover={{
                            opacity: .4,
                            transition: {duration: 0.2}
                        }}
                        className=" bg-black bg-opacity-70 absolute inset-0 text-grayRetro p-4 text-lg md:text-sm lg:text-lg">

                    </m.div>
                </Link>
            ))}
        </div>
    )
}

export default ProductsCards
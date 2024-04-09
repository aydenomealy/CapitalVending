import {PRODUCTS} from "@/config";
import Image from "next/image";
import {motion as m} from "framer-motion";


const ProductsCards = () => {
    return (
        <div className='grid grid-cols-3 h-full gap-10 px-10 py-12 drop-shadow-xl'>
            {PRODUCTS.map((item) => (
                <div key={item.label}
                     className="relative group rounded-lg overflow-hidden aspect-video even:border-redRetro odd:border-lightBlueRetro border-4">
                    <Image
                        alt={item.name}
                        src={item.imageSrc}
                        fill
                        className='object-cover object-center'
                    />
                    <div
                        className='text-grayRetro font-outline-1 text-2xl font-bold absolute flex inset-0 justify-center items-end group-hover:hidden'>
                        {item.name}
                    </div>
                    <m.div
                        initial={{opacity: 0}}
                        whileHover={{
                            opacity: 1,
                            transition: {duration: 0.8}
                        }}
                        className=" bg-black bg-opacity-70 absolute inset-0 text-grayRetro p-4 text-lg">
                        {item.description}
                    </m.div>
                </div>
            ))}
        </div>
    )
}

export default ProductsCards
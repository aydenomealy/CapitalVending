import {PRODUCTS2} from "@/config";
import Image from "next/image";
import Link from "next/link";


const ProductsCards = () => {
    return (
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 pt-44 px-10 md:px-0 lg:px-10 drop-shadow-xl'>
            {PRODUCTS2.map((item, index) => (
                <Link key={item.label}
                      href={"/products/" + index}
                     className="relative rounded-lg overflow-hidden aspect-video border-grayRetro border-2 hover:cursor-pointer">
                    <Image
                        alt={item.name}
                        src={item.headerImg}
                        fill
                        placeholder="blur"
                        blurDataURL={item.headerImg}
                        className='object-cover object-center'
                    />
                    <div
                        className='text-grayRetro font-outline-1 text-2xl lg:text-3xl font-extrabold absolute flex inset-0 justify-center items-end drop-shadow-2xl'>
                        {item.name}
                    </div>
                    <div
                        className="transition-colors duration-200 ease-in-out hover:bg-black hover:bg-opacity-50 absolute inset-0 ">
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductsCards
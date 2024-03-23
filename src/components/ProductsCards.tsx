import {PRODUCTS} from "@/config";
import Image from "next/image";

const ProductsCards = () => {
    return (
        <div className='grid grid-cols-3 h-full gap-10 px-10 py-12 drop-shadow-xl'>
            {PRODUCTS.map((item) => (
                <div key={item.label} className="relative rounded-lg overflow-hidden aspect-video">
                    <Image
                        alt={item.name}
                        src={item.imageSrc}
                        fill
                        className='object-cover object-center'
                    />
                    <span className='text-secondary-foreground text-2xl font-bold fixed'>{item.name}</span>
                </div>

            ))}

        </div>
    )
}

export default ProductsCards
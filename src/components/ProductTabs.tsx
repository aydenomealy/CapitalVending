import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {PRODUCT_CATEGORIES} from "@/config";
import Image from "next/image";
import Link from "next/link";
import {Card, CardContent, CardFooter} from "@/components/ui/card";

const ProductTabs = () => {
    return <div className='text-center'>
        <Tabs defaultValue="Arcade and Amusements" className='w-full'>
            <TabsList className='mx-auto w-fit max-w-4xl block'>
                {PRODUCT_CATEGORIES.map((category) => {
                    return <TabsTrigger key={category.value} value={category.label}>{category.label}</TabsTrigger>
                })}
            </TabsList>
            <div className='items-center'>
            {PRODUCT_CATEGORIES.map((category) => {
                return <div key={category.value} className='mx-auto max-w-7xl'>
                    <TabsContent value={category.label}>
                        <div className='grid sm:grid-cols-3 gap-x-8 gap-y-10 py-4 grid-cols-1'>
                        {category.featured.map((item) => (
                            <Card key={item.name}
                                 className='group text-base sm:text-sm bg-gray-100'>
                                <CardContent
                                    className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 mx-3 mt-3'>
                                    <Image
                                        src={item.imageSrc}
                                        alt='product catagory image'
                                        fill
                                        className='object-cover object-center'
                                    />
                                </CardContent>

                                <CardFooter>
                                    <Link href={item.href} className='mt-6 block font-medium text-gray-900'>
                                        {item.name}
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                        </div>
                    </TabsContent>

                </div>
            })}
            </div>
        </Tabs>
    </div>
}

export default ProductTabs;
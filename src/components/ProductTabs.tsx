import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {PRODUCT_CATEGORIES} from "@/config";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";

const ProductTabs = () => {
    return <div className='text-center'>
        <Tabs defaultValue="Arcade & Amusements" className='w-full '>
            <TabsList className='mx-auto max-w-6xl h-fit flex flex-row border border-gray-200'>
                {PRODUCT_CATEGORIES.map((category) => {
                    return <TabsTrigger
                        key={category.value}
                        value={category.label}
                        className='flex-1 text-wrap align-middle h-full'>
                        {category.label}
                    </TabsTrigger>
                })}
            </TabsList>
            <div className='items-center'>
                {PRODUCT_CATEGORIES.map((category) => {
                    return <div key={category.value} className='mx-auto max-w-6xl'>
                        <TabsContent value={category.label}>
                            {category.featured.map((item) => (
                                <Card key={item.name}
                                      className='sm:text-base text-sm bg-gray-100 mb-3'>
                                    <CardContent
                                        className='mt-6 pr-3'>
                                        <div className='grid sm:grid-cols-3 h-full grid-cols-2'>
                                            <div
                                                className='overflow-hidden relative lg:aspect-video aspect-square rounded-lg'>
                                                <Image
                                                    src={item.imageSrc}
                                                    alt='product catagory image'
                                                    fill
                                                    className='object-cover object-center'
                                                />
                                            </div>
                                            <div className='sm:col-span-2 text-left ml-5 mr-2'>
                                                <div className='block font-medium text-gray-900 mb-5'>
                                                    {item.name}
                                                </div>
                                                <p className='md:text-base text-sm'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </TabsContent>

                    </div>
                })}
            </div>
        </Tabs>
    </div>
}

export default ProductTabs;
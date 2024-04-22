"use client"

import {Card, CardContent} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {CAREER_SCHEMA} from "@/config";
import React, {useState} from "react";
import {z} from "zod";
import {Input} from "@/components/ui/input";
import {Loader2} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

const CareerForm = () => {

    const form = useForm({
        resolver: zodResolver(CAREER_SCHEMA),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            resume: ""
        }
    })

    const [loading, setLoading] = useState(false)

    const onSubmit = (data: z.infer<typeof CAREER_SCHEMA>) => {
        setLoading(true)
        console.log(data)
    }

    const fileRef = form.register("resume");

    return (
        <Card className=' md:w-3/5 w-4/5 shadow-xl mt-8 text-left bg-blueRetro border-redRetro border-2'>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                        <div className='space-y-4 mt-4'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className='text-grayRetro'>Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='John Doe'/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='email'
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className='text-grayRetro'>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} type='email' placeholder='johndoe@gmail.com'/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='phone'
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className='text-grayRetro'>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='123-456-7890'/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='resume'
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className='text-grayRetro'>Resume</FormLabel>
                                        <FormControl>
                                            <Input {...fileRef} type='file' className='hover:cursor-pointer'
                                                   onChange={(event) => {
                                                       field.onChange(event.target?.files?.[0] ?? undefined);
                                                   }}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button className='w-full' type='submit' disabled={loading}>
                            <Loader2 className={cn('mr-2 h-4 w-4 animate-spin hidden', {
                                'flex': loading
                            })}/>
                            {loading ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default CareerForm;
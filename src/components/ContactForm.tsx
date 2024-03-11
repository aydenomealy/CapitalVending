"use client"

import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import {CONTACT_SCHEMA} from "@/config";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {z} from "zod";
import {useState} from "react"
import {Loader2} from "lucide-react";
import {cn} from "@/lib/utils";
import {Textarea} from "@/components/ui/textarea";

const ContactForm = () => {

    const form = useForm({
        resolver: zodResolver(CONTACT_SCHEMA),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    })

    const [loading, setLoading] = useState(false)

    const onSubmit = (data: z.infer<typeof CONTACT_SCHEMA>) => {
        setLoading(true)
        console.log(data)
    }

    return (
        <Card className=' md:w-3/5 w-4/5 shadow-md mt-8 text-left'>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                        <div className='space-y-4 mt-4'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='John Doe' />
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
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} type='email' placeholder='johndoe@gmail.com' />
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
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='123-456-7890' />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='message'
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} placeholder='Your message here' className='resize-none '/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button className='w-full' type='submit' disabled={loading}>
                            <Loader2 className={cn('mr-2 h-4 w-4 animate-spin hidden', {
                                'flex': loading
                            } )}/>
                            {loading ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            {/*<CardFooter>*/}

            {/*    /!*<Button variant='ghost'>Clear</Button>*!/*/}
            {/*</CardFooter>*/}
        </Card>
    )
}

export default ContactForm
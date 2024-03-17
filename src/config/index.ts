import {z} from "zod";

export const PRODUCT_CATEGORIES = [
    {
        label: "Arcade & Amusements",
        value: "arcade_amusement" as const,
        featured: [
            {
                name: "Arcade Machines",
                description: "We have a wide selection of fully restored classic arcade machines. ",
                imageSrc: "/nav/machines/arcade.jpg"
            },
            {
                name: "Pinball",
                description: "",
                imageSrc: "/nav/machines/pinball.jpg"
            },
            {
                name: "Golden Tee",
                description: "",
                imageSrc: "/nav/machines/atm.jpg"
            },

        ]
    },
    {
        label: "Merchandisers and Redemption",
        value: "merchandisers_redemption" as const,
        featured: [
            {
                name: "Cranes",
                description: "",
                imageSrc: "/nav/machines/pinball.jpg"
            },
            {
                name: "ATMs",
                description: "",
                imageSrc: "/nav/machines/jukebox.jpg"
            },
            {
                name: "Prizes",
                description: "",
                imageSrc: "/nav/machines/atm.jpg"
            },
        ]
    },
    {
        label: "Traditional Amusements",
        value: "traditional_amusements" as const,
        featured: [
            {
                name: "Touch Tunes Jukebox",
                description: "",
                imageSrc: "/nav/machines/touchtunes.jpg"
            },
            {
                name: "Dart Boards",
                description: "",
                imageSrc: "/nav/machines/dart.jpg"
            },
            {
                name: "Pool Tables",
                description: "",
                imageSrc: "/nav/machines/pool.jpg"
            },
            {
                name: "Pinball",
                description: "",
                imageSrc: "/nav/machines/pinball.jpg"
            },
        ]
    },
    {
        label: "ATMs",
        value: "atms" as const,
        featured: [
            {
                name: "ATM Service",
                description: "",
                imageSrc: "/nav/merchandise/atm.jpg"
            },
            {
                name: "Outdoor ATMs",
                description: "",
                imageSrc: "/nav/merchandise/outdoor.jpg"
            },
            {
                name: "Merchant Loading",
                description: "",
                imageSrc: "/nav/merchandise/amt2.jpg"
            },
            {
                name: "Event ATM's",
                description: "",
                imageSrc: "/nav/merchandise/eventatm.jpg"
            },
        ]
    }
]

export const CAROUSEL_IMAGES = [
    {
        name: "7-11 logo",
        value: "711" as const,
        imgSrc: "/scroller/711.png"
    },
    {
        name: "Amusement Connect Logo",
        value: "amusementconnect" as const,
        imgSrc: "/scroller/amusementconnect.png"
    },
    {
        name: "Buffalo Wild Wings Logo",
        value: "BuffaloWildWings" as const,
        imgSrc: "/scroller/BuffaloWildWings.jpg"
    },
    {
        name: "Cartoon Network Logo",
        value: "CartoonNetwork" as const,
        imgSrc: "/scroller/Cartoon_Network.svg"
    },
    {
        name: "First National Bank Field Logo",
        value: "FirstNationalBank" as const,
        imgSrc: "/scroller/First_National_Bank_Field.png"
    },
    {
        name: "Raw Thrills Logo",
        value: "RawThrills" as const,
        imgSrc: "/scroller/RawThrills.png"
    },
    {
        name: "Giant Logo",
        value: "Giant" as const,
        imgSrc: "/scroller/giant.jpeg"
    },
    {
        name: "Hershey Park Logo",
        value: "HersheyPark" as const,
        imgSrc: "/scroller/HersheyParkLogo.png"
    },
    {
        name: "Pipeline Logo",
        value: "Pipeline" as const,
        imgSrc: "/scroller/pipeline.png"
    },
    {
        name: "Speedway Logo",
        value: "Speedway" as const,
        imgSrc: "/scroller/Speedway.png"
    },
    {
        name: "Stern Logo",
        value: "Stern" as const,
        imgSrc: "/scroller/stern.png"
    },
    {
        name: "TouchTunes Logo",
        value: "TouchTunes" as const,
        imgSrc: "/scroller/touchtunes.jpg"
    },
]

export const CONTACT_SCHEMA = z.object({
    name: z.string().min(1, {
        message: "Please enter your name"
    }),
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    phone: z.string(),
    message: z.string()
})

const ACCEPTED_FILE_TYPES = ["file/pdf", "file/docx", "file/doc"];

export const CAREER_SCHEMA = z.object({
    name: z.string().min(1, {
        message: "Please enter your name"
    }),
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    phone: z.string().min(7, {
        message: "Please enter a valid phone number"
    }),
    resume: z
        .any()
        .refine((files) => files?.length == 1, "Please upload your resume.")
        .refine((files) => files?.[0]?.size <= 700000)
        .refine(
            (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
            ".pdf, .docx, and .doc files are accepted."
        ),
})
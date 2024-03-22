import {z} from "zod";

export const PRODUCT_CATEGORIES = [
    {
        label: "Arcade & Amusements",
        value: "arcade_amusement" as const,
        featured: [
            {
                name: "Arcade Machines",
                description: "We have a wide selection of fully restored classic arcade machines. ",
                imageSrc: "/machines/arcade.jpg"
            },
            {
                name: "Pinball",
                description: "We have a wide selection of fully restored classic pinball machines.",
                imageSrc: "/machines/pinball.jpg"
            },
            {
                name: "Amusement Connect",
                description: "Amusement Connect makes it easy to modernize any arcade by offering a card system. " +
                    "Customers purchase a card at the kiosk, load it with money, and then they just tap to play.",
                imageSrc: "/machines/amusementConnect.jpg"
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
                imageSrc: "/machines/cranes.jpg"
            },
            {
                name: "ATMs",
                description: "",
                imageSrc: "/machines/a.jpg"
            },
            {
                name: "Prizes",
                description: "",
                imageSrc: "/machines/a.jpg"
            },
        ]
    },
    {
        label: "Traditional Amusements",
        value: "traditional_amusements" as const,
        featured: [
            {
                name: "Touch Tunes Jukebox",
                description: "Touch Tunes is the leader in jukebox systems. We install a professional surround sound system in your establishment.",
                imageSrc: "/machines/touchtunes.jpg"
            },
            {
                name: "Dart Boards",
                description: "",
                imageSrc: "/machines/darts.jpg"
            },
            {
                name: "Pool Tables",
                description: "",
                imageSrc: "/machines/pool.jpg"
            },
            {
                name: "Pinball",
                description: "We have a wide selection of fully restored classic pinball machines.",
                imageSrc: "/machines/pinball.jpg"
            },
        ]
    },
    {
        label: "ATMs",
        value: "atms" as const,
        featured: [
            {
                name: "ATM Service",
                description: "We will provide, install, and maintain an ATM in your establishment. Its a completely hands off way to increase the revenue of your business.",
                imageSrc: "/machines/atm.jpg"
            },
            {
                name: "Outdoor ATMs",
                description: "Dont have space for an ATM? We also provide outdoor atms that are secured in a solid steel enclosure." +
                    " This allows customers to use the ATM 24/7 without even entering your establishment.",
                imageSrc: "/machines/outdoor.jpg"
            },
            {
                name: "Merchant Loading",
                description: "Want a little more involvement? We can provide you an ATM that you load yourself.",
                imageSrc: "/machines/atm2.jpg"
            },
            {
                name: "Event ATM's",
                description: "We have a custom built ATM trailer perfect for providing atms to your event. Our remote monitoring system will make sure your event never runs out of cash.",
                imageSrc: "/machines/eventatm.jpg"
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

export const NAV_ITEMS = [
    {
        name: "Home",
        value: "home" as const,
        href: "/",
        num: 0
    },
    {
        name: "Contact Us",
        value: "contact" as const,
        href: "/contact",
        num: 1
    },
    {
        name: "Careers",
        value: "careers" as const,
        href: "/careers",
        num: 2
    },
    {
        name: "Products & Services",
        value: "products" as const,
        href: "/products",
        num: 3
    },
    {
        name: "Gallery",
        value: "gallery" as const,
        href: "/gallery",
        num: 4
    },
]
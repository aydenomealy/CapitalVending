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
                imageSrc: "/machines/crane.jpg"
            },
            {
                name: "ATMs",
                description: "",
                imageSrc: "/machines/a.jpg"
            },
            {
                name: "Prizes",
                description: "",
                imageSrc: "/machines/prize.jpg"
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

export const PRODUCTS = [
    {
        name: "Arcade Machines",
        label: "arcade_machine" as const,
        description: "We have a wide selection of fully restored classic arcade machines. ",
        imageSrc: "/machines/arcade.jpg"
    },
    {
        name: "Pinball",
        label: "pinball" as const,
        description: "We have a wide selection of fully restored classic pinball machines.",
        imageSrc: "/machines/pinball.jpg"
    },
    {
        name: "Amusement Connect",
        label: "amusement_connect" as const,
        description: "Amusement Connect makes it easy to modernize any arcade by offering a card system. " +
            "Customers purchase a card at the kiosk, load it with money, and then just tap to play.",
        imageSrc: "/machines/amusementConnect.jpg"
    },
    {
        name: "Cranes",
        label: "cranes" as const,
        description: "",
        imageSrc: "/machines/crane.jpg"
    },
    {
        name: "Prizes",
        label: "prizes" as const,
        description: "We offer premium prizes that include toys and official merch from the latest trending topic. This keeps customers engaged and playing our games.",
        imageSrc: "/machines/prize.jpg"
    },
    {
        name: "Touch Tunes Jukebox",
        label: "touch_tunes_jukebox" as const,
        description: "Touch Tunes is the leader in jukebox systems. We install a professional surround sound system in your establishment.",
        imageSrc: "/machines/touchtunes.jpg"
    },
    {
        name: "Dart Boards",
        label: "dart_boards" as const,
        description: "",
        imageSrc: "/machines/darts.jpg"
    },
    {
        name: "Pool Tables",
        label: "pool_tables" as const,
        description: "We offer the best pool table setups for your business. " +
            "We provide everything you need from cues to triangles and even chalk. " +
            "We use a precision tools to level the table perfectly.",
        imageSrc: "/machines/pool.jpg"
    },
    {
        name: "ATM Service",
        label: "atm_service" as const,
        description: "We will provide, install, and maintain an ATM in your establishment. Its a completely hands off way to increase the revenue of your business.",
        imageSrc: "/machines/atm.jpg"
    },
    {
        name: "Outdoor ATMs",
        label: "outdoor_atm" as const,
        description: "Dont have space for an ATM? We also provide outdoor atms that are secured in a solid steel enclosure." +
            " This allows customers to use the ATM 24/7 without entering your establishment.",
        imageSrc: "/machines/outdoor.jpg"
    },
    {
        name: "Merchant Loading",
        label: "merchant_loading" as const,
        description: "Want a little more involvement? We can provide you an ATM that you load yourself.",
        imageSrc: "/machines/atm2.jpg"
    },
    {
        name: "Event ATM's",
        label: "event_atm" as const,
        description: "We have a custom built ATM trailer perfect for providing atms to your event. Our remote monitoring system will make sure your event never runs out of cash.",
        imageSrc: "/machines/eventatm.jpg"
    }
]

export const PRODUCTS2  = [
    {
        name: "Arcade Machines",
        label: "arcade_machine" as const,
        description: "We have a wide selection of fully restored classic arcade machines. ",
        headerImg: "/machines/arcade.webp",
        subSections: [
            {
                name: "Pinball",
                description: "We have a wide selection of fully restored classic pinball machines.",
                imageSrc: "/machines/pinball.webp"
            },
            {
                name: "Amusement Connect",
                description: "Amusement Connect makes it easy to modernize any arcade by offering a card system. " +
                    "Customers purchase a card at the kiosk, load it with money, and then just tap to play.",
                imageSrc: "/machines/amusementConnect.webp"
            },
            {
                name: "Cranes",
                description: "",
                imageSrc: "/machines/crane.webp"
            },
            {
                name: "Prizes",
                description: "We offer premium prizes that include toys and official merch from the latest trending topic. This keeps customers engaged and playing our games.",
                imageSrc: "/machines/prize.webp"
            },
        ]
    },
    {
        name: "Jukeboxes",
        label: "touch_tunes_jukebox" as const,
        description: "Touch Tunes is the leader in jukebox systems. We install a professional surround sound system in your establishment.",
        headerImg: "/machines/touchtunes.webp",
        subSections: [
            {
                name: "TouchTunes Jukebox",
                description: "We have a wide selection of fully restored classic pinball machines.",
                imageSrc: "/machines/touchtunes.webp"
            },
        ]
    },
    // {
    //     name: "Dart Boards",
    //     label: "dart_boards" as const,
    //     description: "",
    //     headerImg: "/machines/darts.webp"
    // },
    {
        name: "Pool Tables",
        label: "pool_tables" as const,
        description: "We offer the best pool table setups for your business. " +
            "We provide everything you need from cues to triangles and even chalk. " +
            "We use a precision tools to level the table perfectly.",
        headerImg: "/machines/pool.webp",
        subSections: [
            {
                name: "Premium Pool tables",
                description: "We have a wide selection of fully restored classic pinball machines.",
                imageSrc: "/machines/touchtunes.webp"
            },
            {
                name: "Pool Tournaments",
                description: "We can provide pool tables for events.",
                imageSrc: "/machines/touchtunes.webp"
            },
            {
                name: "Proper Maintenance",
                description: "Our pool tables are professionally re-felted and leveled to give your players a premium experience.",
                imageSrc: "/machines/touchtunes.webp"
            }
        ]
    },

    {
        name: "ATM Service",
        label: "atm_service" as const,
        description: "We will provide, install, and maintain an ATM in your establishment. " +
            "We monitor our ATM 24/7, making sure it never runs out of money and minimizing downtime. " +
            "It's a completely hands off way to increase the revenue of your business.",
        headerImg: "/machines/atm.webp",
        subSections: [
            {
                name: "Outdoor ATMs",
                description: "Dont have space for an ATM? We also offer outdoor atms that are secured in a solid steel weather-proof enclosure. " +
                    "Outdoor ATMs allow customers to withdraw cash 24/7 without needing to enter your establishment.",
                imageSrc: "/machines/outdoor.webp"
            },
            {
                name: "Merchant Loading",
                description: "Want a little more involvement? We can provide you an ATM that you load yourself and all the necessary training to do so.",
                imageSrc: "/machines/atm2.webp"
            },
            {
                name: "Event ATM's",
                description: "We have a custom built ATM trailer perfect for providing atms to your event. With our remote monitoring system, your event will never run out of cash.",
                imageSrc: "/machines/eventatm.webp"
            }
        ]
    }
]

export const CAROUSEL_IMAGES = [
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
        imgSrc: "/scroller/giant.png"
    },
    {
        name: "Pipeline Logo",
        value: "Pipeline" as const,
        imgSrc: "/scroller/pipeline.png"
    },
    {
        name: "Stern Logo",
        value: "Stern" as const,
        imgSrc: "/scroller/stern.png"
    },
    {
        name: "TouchTunes Logo",
        value: "TouchTunes" as const,
        imgSrc: "/scroller/touchtunes.png"
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
        .refine((files) => files?.length == 1, {message: "Please upload your resume."})
        // .refine((files) => console.log(files?.[0]?.type))
        // .refine(
        //     (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
        //     ".pdf, .docx, and .doc files are accepted."
        // ),
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
        name: "Gallery",
        value: "gallery" as const,
        href: "/gallery",
        num: 3
    },
]

export const GALLERY = [
    {
        name: "The Barn Resort",
        value: "barnResort" as const,
        imgSrc: ["/gallery/barnResort/BarnResort1.jpg", "/gallery/barnResort/BarnResort2.jpg", "/gallery/barnResort/BarnResort3.jpg",
            "/gallery/barnResort/BarnResort4.jpg", "/gallery/barnResort/BarnResort5.jpg", "/gallery/barnResort/BarnResort6.jpg", "/gallery/barnResort/BarnResort7.jpg",
            "/gallery/barnResort/BarnResort8.jpg", "/gallery/barnResort/BarnResort9.jpg"]
    },
    {
        name: "Hershey Lodge",
        value: "barnResort" as const,
        imgSrc: ["/gallery/hersheyLodge/HersheyLodge (1).jpg", "/gallery/hersheyLodge/HersheyLodge (2).jpg", "/gallery/hersheyLodge/HersheyLodge (3).jpg",
            "/gallery/hersheyLodge/HersheyLodge (4).jpg", "/gallery/hersheyLodge/HersheyLodge (5).jpg", "/gallery/hersheyLodge/HersheyLodge (6).jpg",
            "/gallery/hersheyLodge/HersheyLodge (7).jpg"]
    }
]
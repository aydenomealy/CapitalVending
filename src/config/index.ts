import {z} from "zod";

export const PRODUCT_CATEGORIES = [
    {
        label: "Arcade and Amusements",
        value: "coin_operated_games" as const,
        featured: [
            {
                name: "Arcade Machines",
                href: "#",
                imageSrc: "/nav/machines/pinball.jpg"
            },
            {
                name: "Darts",
                href: "#",
                imageSrc: "/nav/machines/jukebox.jpg"
            },
            {
                name: "Golden Tee",
                href: "#",
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
                href: "#",
                imageSrc: "/nav/merchandise/pinball.jpg"
            },
            {
                name: "ATMs",
                href: "#",
                imageSrc: "/nav/merchandise/jukebox.jpg"
            },
            {
                name: "Prizes",
                href: "#",
                imageSrc: "/nav/merchandise/atm.jpg"
            },
        ]
    },
    {
        label: "Traditional Amusements",
        value: "traditional_amusements" as const,
        featured: [
            {
                name: "Touch Tunes Jukebox",
                href: "#",
                imageSrc: "/nav/merchandise/jukebox.jpg"
            },
            {
                name: "Dart Boards",
                href: "#",
                imageSrc: "/nav/merchandise/dart.jpg"
            },
            {
                name: "Pool Tables",
                href: "#",
                imageSrc: "/nav/merchandise/pool.jpg"
            },
            {
                name: "Pinball",
                href: "#",
                imageSrc: "/nav/merchandise/pinball.jpg"
            },
        ]
    },
    {
        label: "ATMs",
        value: "atms" as const,
        featured: [
            {
                name: "ATM Service",
                href: "#",
                imageSrc: "/nav/merchandise/atm.jpg"
            },
            {
                name: "Merchant Loading",
                href: "#",
                imageSrc: "/nav/merchandise/amt2.jpg"
            },
            {
                name: "Event ATM's",
                href: "#",
                imageSrc: "/nav/merchandise/eventatm.jpg"
            },
        ]
    }
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

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

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
        .refine((files) => files?.length == 1, "File is required.")
        .refine((files) => files?.[0]?.size <= 700000)
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            ".jpg, .jpeg, .png and .webp files are accepted."
        ),
})
import {z} from "zod";

export const PRODUCT_CATEGORIES = [
    {
        label: "Coin-operated Games",
        value: "coin_operated_games" as const,
        featured: [
            {
                name: "Pinballs",
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
        label: "Bulk Vending and Jukeboxes",
        value: "bulk_vending_jukeboxes" as const,
        featured: [
            {
                name: "Touch Tunes Jukebox",
                href: "#",
                imageSrc: "/nav/merchandise/pinball.jpg"
            },
            {
                name: "Traditional CD Jukeboxes",
                href: "#",
                imageSrc: "/nav/merchandise/jukebox.jpg"
            },
            {
                name: "Premium Vending Products",
                href: "#",
                imageSrc: "/nav/merchandise/atm.jpg"
            },
        ]
    },
    {
        label: "Party & Event Rentals",
        value: "party_event_rentals" as const,
        featured: [
            {
                name: "Touch Tunes Jukebox",
                href: "#",
                imageSrc: "/nav/merchandise/pinball.jpg"
            },
            {
                name: "Traditional CD Jukeboxes",
                href: "#",
                imageSrc: "/nav/merchandise/jukebox.jpg"
            },
            {
                name: "Premium Vending Products",
                href: "#",
                imageSrc: "/nav/merchandise/atm.jpg"
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
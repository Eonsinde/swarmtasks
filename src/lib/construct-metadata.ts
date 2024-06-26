import { Metadata } from "next"

export const API_URL: string = "https://plug-server.onrender.com";

export const constructMetadata = ({
    title= "Swarmtasks: Plan your life with AI",
    description="Swarmtasks allows you to schedule different events and use AI for better options",
    image="/thumbnail.png",
    icons="favicon.ico",
    noIndex=false
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
} = {}): Metadata => {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@eonsinde"
        },
        icons,
        metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://plug-afrika-waitlist.netlify.app"),
        themeColor: "#fff",
        ...(noIndex && {
            robots: {
                index: false,
                follow: false
            }
        })
    }
}
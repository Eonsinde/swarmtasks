"use client"
import { ReactNode, useMemo } from "react"
import { ConvexProviderWithAuth, ConvexReactClient } from "convex/react"
import { useSession } from "next-auth/react"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function useAuth() {
    const { data: session, update } = useSession();

    return useMemo(() => ({
        isLoading: false,
        isAuthenticated: session !== null,
        fetchAccessToken: async({
            forceRefreshToken
        } : {
            forceRefreshToken: boolean
        }) => {
            if (forceRefreshToken) {
                const session = await update();
                return session?.convexToken ?? null;
            }

            return null;
        }
    }), [JSON.stringify(session?.user)]);
}

export default function ConvexClientProvider({
    children
}: {
    children: ReactNode
}) {
    return (
        <ConvexProviderWithAuth
            client={convex}
            useAuth={useAuth}
        >
            {children}
        </ConvexProviderWithAuth>
    )
}
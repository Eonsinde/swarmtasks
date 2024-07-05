import MobileNav from "@/components/nav/mobile-nav"
import Sidebar from "@/components/nav/side-bar"

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="flex flex-col">
                <MobileNav />
                {children}
            </div>
        </div>
    )
}

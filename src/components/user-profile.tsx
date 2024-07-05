"use client"
import Image from "next/image"
import { useSession } from "next-auth/react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

const UserProfile = () => {
    const session = useSession();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center space-x-2 p-0 lg:px-3 cursor-pointer">
                    <Image
                        className="rounded-full"
                        src={session.data?.user?.image!}
                        height={24}
                        width={24}
                        alt={`${session.data?.user?.name} avatar`}
                    />
                    <p className="truncate">{session.data?.user?.email}</p>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        
    )
}

export default UserProfile
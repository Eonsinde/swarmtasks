"use client"
import Image from "next/image"
import { useSession } from "next-auth/react"

const UserProfile = () => {
    const session = useSession();

    return (
        <div className="">
            <Image
                className="rounded-full"
                src={session.data?.user?.image!}
                height={24}
                width={24}
                alt="user avatar"
            />
        </div>
    )
}

export default UserProfile
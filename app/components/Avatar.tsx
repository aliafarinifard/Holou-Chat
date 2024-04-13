'use client'

import { User } from "@prisma/client"
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";


interface AvatarProps {
    user?: User;
}


const Avatar: React.FC<AvatarProps> = ({ user }) => {
    return (
        <div className="relative">
            <div
                className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11"
            >
                <Image
                    alt="Avatar"
                    src={user?.image || '/images/placeholder-profile.jpg'}
                    fill
                />
            </div>
            <span
                className="absolute top-0 right-0 block rounded-full bg-green-500 ring-2 ring-white w-2 h-2 md:h-3 md:w-3"
            />
        </div>
    )
}

export default Avatar
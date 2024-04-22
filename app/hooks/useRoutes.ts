// ** Next
import { usePathname } from "next/navigation";

// ** React
import { useMemo } from "react";

// ** Next
import { signOut } from "next-auth/react";

// ** Actions
import useConversation from "./useConversation";

// ** Icons
import { HiChat } from "react-icons/hi";
import {
    HiArrowLeftOnRectangle,
    HiUsers
} from 'react-icons/hi2';


const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            active: pathname === '/users'
        },
        {
            label: 'Logout',
            href: '#',
            onClick: () => signOut(),
            icon: HiArrowLeftOnRectangle
        },
    ], [pathname, conversationId]);

    return routes;
};


export default useRoutes;
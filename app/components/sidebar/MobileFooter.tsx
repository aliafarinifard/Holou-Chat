'use client';

// ** Hooks
import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";

// ** Components
import MobileItem from "./MobileItem";


const MobileFooter = () => {

    const routes = useRoutes();
    const { isOpen } = useConversation();

    if (isOpen) {
        return null;
    };

    return (
        <div
            className="fixed bottom-0 justify-between w-full z-40 flex items-center bg-white border-t-[1px] lg:hidden"
        >
            {routes.map((route) => (
                <MobileItem
                    key={route.label}
                    href={route.href}
                    active={route.active}
                    icon={route.icon}
                    onClick={route.onClick}
                />
            ))}
        </div>
    )
}

export default MobileFooter
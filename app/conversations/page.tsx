'use client';

// ** CLSX
import clsx from "clsx";

// ** Hooks
import useConversation from "../hooks/useConversation";

// ** Components
import EmptyState from "../components/EmptyState";


const Home = () => {

    const { isOpen } = useConversation();

    return (
        <div
            className={clsx(`
                lg:pl-80 h-full lg:block`, 
                isOpen ? 'block' : 'hidden'
            )}
        >
            <EmptyState />
        </div>
    )
}

export default Home
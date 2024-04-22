// ** Pusher
import { Channel, Members } from "pusher-js";

// ** Actions
import useActiveList from "./useActiveList";

// ** React
import { useState, useEffect } from "react";

// ** Pusher
import { pusherClient } from "../libs/pusher";


const useActiveChannel = () => {
    const { set, add, remove } = useActiveList();
    const [activeChannel, setActiveChannel] = useState<Channel | null>(null);

    useEffect(() => {
        let channel = activeChannel;

        if (!channel) {
            channel = pusherClient.subscribe('presence-messenger');
            setActiveChannel(channel);
        };

        channel.bind('pusher:subscription_succeeded', (members: Members) => {
            const initialMembers: string[] = [];

            members.each((member: Record<string, any>) => initialMembers.push(member.id));
            set(initialMembers);
        });

        channel.bind("pusher:member_added", (member: Record<string, any>) => {
            add(member.id);
        });


        channel.bind("pusher:member_removed", (member: Record<string, any>) => {
            remove(member.id);
        });

        return () => {
            if (activeChannel) {
                pusherClient.unsubscribe('presence-messenger');
                setActiveChannel(null);
            }
        }
    }, [activeChannel, set, add, remove]);
};

export default useActiveChannel;
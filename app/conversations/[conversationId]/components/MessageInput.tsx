'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";


interface MessageInputProps {
    id: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}


const MessageInput: React.FC<MessageInputProps> = ({
    id,
    placeholder,
    type,
    required,
    register,
    errors
}) => {
    return (
        <div
            className="relative w-full"
        >
            <input
                id={id}
                type={type}
                autoComplete={id}
                placeholder={placeholder}
                {...register(id, { required })}
                className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none ___message-input"
            />
        </div>
    )
}

export default MessageInput
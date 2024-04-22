'use client'

// ** Components
import Modal from "@/app/components/Modal";

// ** Next
import Image from "next/image";


interface ImageModalProps {
    isOpen?: boolean;
    onClose: () => void;
    src?: string | null;
}


const ImageModal: React.FC<ImageModalProps> = ({
    isOpen,
    onClose,
    src
}) => {

    if (!src) {
        return null;
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <div
                className="w-80 h-[40rem]"
            >
                <Image
                    alt="image"
                    fill
                    src={src}
                    className="object-cover"
                />
            </div>
        </Modal>
    )
}

export default ImageModal
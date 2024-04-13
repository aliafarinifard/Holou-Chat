import Image from "next/image"

const EmptyState = () => {
    return (
        <div
            className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100"
        >
            <div className="text-center flex items-center flex-col gap-8">
                <Image
                    src='/images/messenger-logo.webp'
                    alt="messenger logo"
                    height={88}
                    width={88}
                    className="mx-auto w-auto"
                />
                <h3
                    className="mt-2 text-2xl font-semibold text-gray-900"
                >
                    Select a chat or start a new conversation!
                </h3>
            </div>
        </div>
    )
}

export default EmptyState
const MessageSkeleton = () => {
    return (
        <>
            {/* Skeleton for a message item */}
            <div className='flex gap-3 items-center'>
                {/* Skeleton for user avatar */}
                <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
                
                {/* Skeleton for message content */}
                <div className='flex flex-col gap-1'>
                    {/* Skeleton for message sender name */}
                    <div className='skeleton h-4 w-40'></div>
                    {/* Skeleton for message text */}
                    <div className='skeleton h-4 w-40'></div>
                </div>
            </div>
            
            {/* Skeleton for the right-aligned part of the message */}
            <div className='flex gap-3 items-center justify-end'>
                {/* Skeleton for message text */}
                <div className='flex flex-col gap-1'>
                    <div className='skeleton h-4 w-40'></div>
                </div>
                
                {/* Skeleton for user avatar */}
                <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
            </div>
        </>
    );
}

export default MessageSkeleton;

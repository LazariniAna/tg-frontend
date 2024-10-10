import Skeleton from 'react-loading-skeleton';

export const CustomSkeletonLoader = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex'>
                <div className="relative h-[300px] flex  flex-col">
                    {[...Array(12)].map((_, index) => (
                        <div key={index} className="flex-1 mx-1">
                            <Skeleton height={`16px`} width="24px" enableAnimation={false} />
                        </div>
                    ))}
                </div>
                <div className="relative w-full h-[300px] bg-white-100 p-4 rounded-lg">
                    <div className="absolute left-0 top-0 h-full w-2">
                        <Skeleton height="100%" width="100%" enableAnimation={false} />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-2">
                        <Skeleton height="100%" width="100%" enableAnimation={false} />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-[#c6c6c6]" style={{ clipPath: 'polygon(5% 100%, 20% 80%, 30% 80%, 45% 60%, 70% 60%, 80% 45%, 100% 45%, 100% 100%)' }}>
                        <Skeleton height={300} width="100%" enableAnimation={false} />
                    </div>

                    <div className="absolute w-full h-full">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-full" style={{ top: `${(i + 1) }%` }}> <Skeleton height={3} width="96%" enableAnimation={false} /></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-end'>
                <div className="relative w-11/12 h-full flex items-end mt-2">
                    {[...Array(12)].map((_, index) => (
                        <div key={index} className="flex-1 mx-1">
                            <Skeleton height={`${20 + index * 5}%`} width="100%" enableAnimation={false} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
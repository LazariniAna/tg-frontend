import Skeleton from 'react-loading-skeleton';

export const InputSkeleton = () => {
    return (
        <div className="min-w-[200px] py-2 px-3 border border-quartenary rounded-md">
            <Skeleton height={`44px`} width="210px"  enableAnimation={false} />
        </div>
    );
};
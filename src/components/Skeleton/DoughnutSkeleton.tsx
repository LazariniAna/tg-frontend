import Skeleton from 'react-loading-skeleton';

export const DoughnutSkeletonLoader = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className='relative w-72 h-44'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full h-full flex items-start justify-center z-40' >
            <div className="relative bg-lightGray rounded-t-full" style={{ width: '280px', height: '150px' }}>
              <div className="absolute inset-0 overflow-hidden flex justify-center items-end">
                <div className="relative flex justify-center items-end bg-white rounded-t-full" style={{ width: '198px', height: '100px' }}>
                  <div className="relative bg-lightGray rounded-t-full" style={{ width: '180px', height: '90px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

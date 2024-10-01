import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Content from '../Content';
import Title from '../Title/Title';

const ApplicationSkeleton = () => {
    return (
        <div>
            <div>
                <Skeleton height={85} width={'100%'} />
            </div>
            <Content>
                <div className='flex justify-center items-center'>
                    <Title title="Carregando..." />
                </div>
                <div className='flex justify-around'>
                    <div className='w-1/2 flex justify-center items-center'>
                        <Skeleton height={300} width={500} />
                    </div>
                    <nav className='w-1/2'>
                        <ul className='flex flex-col list-none w-10/12'>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                            <li><Skeleton width={'100%'} /></li>
                        </ul>
                    </nav>
                </div>

            </Content>

        </div>
    );
};

export default ApplicationSkeleton;

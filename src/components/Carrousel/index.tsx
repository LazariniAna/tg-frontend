import React, { useState, useEffect, useRef, TouchEventHandler } from 'react';
import ContentCard from '../Cards/ContentCard';
import Arrow from '../../assets/arrow-left.svg';
import Image from 'next/image';

export default function DraggableCarousel({ list, type, hide }: { list: any, type?: string, hide?: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState<number>(list.length);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [dragStartX, setDragStartX] = useState<number | null>(null);
    const handleNext = () => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        function getTotalSize() {
            let qtd = list.length;
            if (window.innerWidth > 1721) {
                qtd = Math.floor(list.length / 3) > 0 ? Math.floor(list.length / 3) : 1;
            } else if (window.innerWidth >= 1095 && window.innerWidth < 1721) {
                qtd = (list.length / 2);
            } else if (window.innerWidth >= 590 && window.innerWidth < 759) {
                qtd = list.length + 2
            } else if (window.innerWidth >= 475 && window.innerWidth < 590) {
                qtd = list.length * 1.3
            } else if (window.innerWidth >= 419 && window.innerWidth < 475) {
                qtd = list.length * 1.6
            } else if (window.innerWidth >= 374 && window.innerWidth < 419) {
                qtd = list.length * 1.8
            } else {
                qtd = list.length * 1.4
            }
            setTotalSlides(qtd)
        }

        getTotalSize();

        function handleResize() {
            getTotalSize();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
        setDragStartX(event.touches[0].clientX);
    };

    const handleTouchMove: TouchEventHandler<HTMLDivElement> = (event) => {
        if (dragStartX !== null) {
            const dragEndX = event.touches[0].clientX;
            const dragDistance = dragStartX - dragEndX;

            if (dragDistance > 50 && currentIndex < totalSlides - 1) {
                setCurrentIndex(currentIndex + 1);
                setDragStartX(null);
            } else if (dragDistance < -50 && currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
                setDragStartX(null);
            }
        }
    };

    const handleTouchEnd: TouchEventHandler<HTMLDivElement> = () => {
        setDragStartX(null);
    };

    useEffect(() => {
        const handleMouseUpDocument = () => handleMouseUp();
        const handleMouseMoveDocument = (event: MouseEvent) => handleMouseMove(event);

        document.addEventListener('mouseup', handleMouseUpDocument);
        document.addEventListener('mousemove', handleMouseMoveDocument);

        return () => {
            document.removeEventListener('mouseup', handleMouseUpDocument);
            document.removeEventListener('mousemove', handleMouseMoveDocument);
        };
    }, [dragStartX, currentIndex]);


    const handleMouseUp = () => {
        setDragStartX(null);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (dragStartX !== null) {
            const dragEndX = event.clientX;
            const dragDistance = dragStartX - dragEndX;

            if (dragDistance > 50 && currentIndex < totalSlides - 1) {
                setCurrentIndex(currentIndex + 1);
                setDragStartX(null);
            } else if (dragDistance < -50 && currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
                setDragStartX(null);
            }
        };

    };
    const handleMouseDown = (event: React.MouseEvent) => {
        setDragStartX(event.clientX);
    };

    return (
        <div className={`relative ${hide ? 'md:hidden' : ''}  items-center overflow-hidden w-full`} ref={carouselRef}>
            <div className="flex item-start transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 45}%)` }}
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}>
                {type === 'content' && list.map((item: any, index: number) => (
                    <div key={index}>
                        <ContentCard item={item} />
                    </div>
                ))}
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <button className="p-2.5 bg-gray-200 opacity-55 rounded-md justify-center items-center " style={{ border: '1px solid black' }} onClick={handlePrevious} disabled={currentIndex === 0}><Image src={Arrow} alt='Arrow' className='hover:scale-125 ease-in duration-150' /></button>
            </div>
            {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <button className="p-2.5 bg-gray-200 opacity-55 rounded-md justify-center items-center " style={{ border: '1px solid black' }} onClick={handleNext} disabled={currentIndex === totalSlides - 1}>
                    <Image src={Arrow} alt='Arrow' className='rotate-180 hover:scale-125 ease-in duration-150' /></button>
            </div> */}
        </div>
    );
}

import React, { useEffect, useState, useRef } from 'react';

function Eyesballs() {
    const [rotate1, setRotate1] = useState(0);
    const [rotate2, setRotate2] = useState(0);
    const center1Ref = useRef(null);
    const center2Ref = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const center1Rect = center1Ref.current.getBoundingClientRect();
            const center2Rect = center2Ref.current.getBoundingClientRect();

            const center1CenterX = center1Rect.left + center1Rect.width / 2;
            const center1CenterY = center1Rect.top + center1Rect.height / 2;
            const center2CenterX = center2Rect.left + center2Rect.width / 2;
            const center2CenterY = center2Rect.top + center2Rect.height / 2;

            const deltax1 = e.clientX - center1CenterX;
            const deltay1 = e.clientY - center1CenterY;
            const deltax2 = e.clientX - center2CenterX;
            const deltay2 = e.clientY - center2CenterY;

            const angle1 = Math.atan2(deltay1, deltax1) * (180 / Math.PI);
            const angle2 = Math.atan2(deltay2, deltax2) * (180 / Math.PI);

            setRotate1(angle1-270);
            setRotate2(angle2-270);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-12 flex justify-between'>
            <div ref={center1Ref} className='w-[15vw] h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center' style={{ transform: `rotate(${rotate1}deg)` }}>
                <div className='center1 flex w-2/3 h-2/3'>
                    <div className='w-full h-full rounded-full bg-zinc-800 flex justify-center items-start'>
                        <div className='w-1/4 h-1/4 rounded-full bg-zinc-200'></div>
                    </div>
                </div>
            </div>
            <div ref={center2Ref} className='w-[15vw] h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center' style={{ transform: `rotate(${rotate2}deg)` }}>
                <div className='center2 flex w-2/3 h-2/3'>
                    <div className='w-full h-full rounded-full bg-zinc-800 flex justify-center items-start'>
                        <div className='w-1/4 h-1/4 rounded-full bg-zinc-200'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyesballs;

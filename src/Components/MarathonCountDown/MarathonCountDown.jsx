import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const MarathonCountDown = ({marathonStarts}) => {

    console.log(marathonStarts)

    const now = new Date();
    const marathonStart = new Date(marathonStarts);
    const remainingSeconds = Math.max(0, Math.floor((marathonStart.getTime() - now.getTime()) / 1000));

    console.log(remainingSeconds)


    return (
        <div className='text-center my-4'>
            <h3 className='font-semibold text-lg mb-2 text-orange-600'>Time Left Until Marathon:</h3>
            <CountdownCircleTimer
                isPlaying
                duration={remainingSeconds}
                colors={[['#004777', 0.4], ['#F7B801', 0.4], ['#A30000', 0.2]]}
                size={70}
                strokeWidth={8}
            >
                {({ remainingTime }) => {
                    const days = Math.floor(remainingTime / (60 * 60 * 24));
                    const hours = Math.floor((remainingTime % (60 * 60 * 24)) / 3600);
                    const minutes = Math.floor((remainingTime % 3600) / 60);
                    return (
                        <div className='text-sm text-gray-700 font-medium'>
                            <div>{days}d {hours}h</div>
                            <div>{minutes}m</div>
                        </div>
                    );
                }}
            </CountdownCircleTimer>
        </div>
    );
};

export default MarathonCountDown;
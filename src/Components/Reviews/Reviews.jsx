import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Zoom } from "react-awesome-reveal";

const Reviews = () => {

    const reviews = [
        {
            id: 1,
            img: "https://i.ibb.co/Rpcmbx1r/sakib.jpg",
            name: "Sakib AL Hasan",
            text: "This marathon website made registration so simple and smooth. Loved the timely reminders and clear event info!",
            rating: 4.8,
            job: "Cricketer"
        },
        {
            id: 2,
            img: "https://i.ibb.co/YBmZBV79/ronaldo.jpg",
            name: "Cristiano Ronaldo",
            text: "A great platform to find marathons. The experience was seamless and the support team was very helpful.",
            rating: 4.8,
            job: "Footballer"
        },
        {
            id: 3,
            img: "https://i.ibb.co/7NWk5Ln0/messi.jpg",
            name: "Lionel Andress Messi",
            text: "I enjoyed participating in the marathons organized here. The site is user-friendly and reliable.",
            rating: 4.8,
            job: "Footballer"
        },
        {
            id: 4,
            img: "https://i.ibb.co/Rpcmbx1r/sakib.jpg",
            name: "Sakib AL Hasan",
            text: "This marathon website made registration so simple and smooth. Loved the timely reminders and clear event info!",
            rating: 4.8,
            job: "Cricketer"
        }
    ]




    return (
        <Zoom duration={2000} triggerOnce>
            <div className='mb-15 grid grid-cols-1 lg:grid-cols-12 gap-8'>

                {/* left content */}
                <div className='lg:col-span-4 flex justify-center items-center'>
                    <div className='max-w-sm text-center lg:text-left'>
                        <h3 className='text-3xl font-medium mb-2'>Trusted by Thousands Peoples</h3>
                        <p className='mb-4'>We are hosting marathons for 8+ years</p>

                        <div className="avatar-group -space-x-6 justify-center lg:justify-start">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                </div>
                            </div>
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-12">
                                    <span>+99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right content */}
                <div className='lg:col-span-8'>
                    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6'>
                        {/* Repeat card - only write once, copy if needed */}
                        {reviews.map((item) => (
                            <div
                                key={item.id}
                                className="card bg-lime-300 shadow-sm hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)] transition duration-300"
                            >
                                <div className="card-body">
                                    <p>{item.text}</p>
                                    <p className='flex items-center gap-2'><FaStar className='text-amber-300' />{item.rating}</p>
                                    <div className='flex items-center gap-4 mt-4'>
                                        <div className="avatar">
                                            <div className="w-14 rounded-full">
                                                <img src={item.img} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4>{item.name}</h4>
                                            <p className='text-black text-sm'>{item.job}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </Zoom>
    );
};

export default Reviews;

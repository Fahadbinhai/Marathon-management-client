import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import latest1 from '../../assets/images/latestnews1.jpg'
import latest2 from '../../assets/images/latestnews2.jpg'
import latest3 from '../../assets/images/latestnews3.jpg'

const AllBlogs = () => {


    const blogs = [
        {
            "id": 1,
            "title": "How to Run Faster",
            "image": latest1,
            "description": "Running fast requires a mix of good technique, strong muscles, and regular practice. Start with a proper warm-up to loosen your muscles and avoid injury.",
            "buttonText": "Read More"
        },
        {
            "id": 2,
            "title": "How to Increase Breath",
            "image": latest2,
            "description": "To improve your breathing and lung capacity, practice deep breathing daily—breathe in through your nose, hold for a few seconds, and exhale slowly through your mouth.",
            "buttonText": "Read More"
        },
        {
            "id": 3,
            "title": "What It Takes to Win a Marathon",
            "image": latest3,
            "description": "Winning a marathon requires more than just running fast. It demands consistent training, strong mental focus, and excellent endurance.",
            "buttonText": "Read More"
        }
    ]

    const repeatBlogs = [...blogs, ...blogs, ...blogs, ...blogs]

    




    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <Fade triggerOnce duration={2000}>
                {
                    repeatBlogs.map((blog, index) => (
                        <div key={index} className="card bg-base-100 shadow-sm hover:shadow-lg transition h-full flex flex-col  ">
                            <figure className="px-6 pt-6">
                                <img src={blog.image} alt="Blog 1" className="rounded-xl w-full object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{blog.title}</h2>
                                <p className='flex-1/2'>{blog.description}</p>
                                <div className="card-actions mt-2">
                                    <button onClick={``} className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Fade>
        </div>
    );
};

export default AllBlogs;
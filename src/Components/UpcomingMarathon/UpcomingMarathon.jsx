import React from 'react';
import upcoming1 from '../../assets/images/upcoming 1.jpg'
import upcoming2 from '../../assets/images/upcoming 2.jpg'
import upcoming3 from '../../assets/images/upcoming 3.jpg'
import upcoming4 from '../../assets/images/upcoming 4.jpg'

const UpcomingMarathon = () => {
    return (
        <div className='mb-20 p-5'>
            <h3 className='mb-4 ml-4 text-3xl font-bold'>UpComing Marathons</h3>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {/* card 1 */}
                <div className="card bg-lime-100 image-full w-96 ">
                    <figure>
                        <img
                            src={upcoming1}
                            alt="marathon" />
                    </figure>
                    <div className="card-body mx-5">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className="card bg-lime-100 image-full w-96 ">
                    <figure>
                        <img
                            src={upcoming2}
                            alt="marathon" />
                    </figure>
                    <div className="card-body mx-5">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div className="card bg-lime-100 image-full w-96 ">
                    <figure>
                        <img
                            src={upcoming3}
                            alt="marathon" />
                    </figure>
                    <div className="card-body mx-5">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                {/* card 4 */}
                <div className="card bg-lime-100 image-full w-96 ">
                    <figure>
                        <img
                            src={upcoming4}
                            alt="marathon" />
                    </figure>
                    <div className="card-body mx-8">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* card 5 */}
                <div className="card bg-lime-100 image-full w-96 ">
                    <figure>
                        <img
                            src={upcoming4}
                            alt="marathon" />
                    </figure>
                    <div className="card-body mx-8">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                {/* card 6 */}
                <div className="card bg-lime-100 image-full w-96 ">
                    <figure>
                        <img
                            src={upcoming4}
                            alt="marathon" />
                    </figure>
                    <div className="card-body mx-8">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpcomingMarathon;
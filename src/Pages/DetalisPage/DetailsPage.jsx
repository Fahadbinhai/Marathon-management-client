import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router';

const DetailsPage = () => {


    const singleData = useLoaderData();

    console.log(singleData)

    return (
        <div>
            {/* {
                details.map(data => (
                    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>} key={data._id}>
                        <SingleDetailsPage data={data}></SingleDetailsPage>
                    </Suspense>
                ))
            } */}
        </div>
    );
};

export default DetailsPage;
import React from 'react';
import { useLoaderData } from 'react-router';

const Plants = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2>This is all plants</h2>
        </div>
    );
};

export default Plants;
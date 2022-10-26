import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const {id} = useLoaderData()
    console.log(id)
    return (
        <div>
            <h2>Checkout form</h2>
        </div>
    );
};

export default Checkout;
import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({ toys, index }) => {
    const { availableQuantity, Photo, price, subCategory, toyName, _id, seller } = toys;
    return (
        <tr>
            <th>{index+1}</th>
            <td>{seller}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td><Link to={`/allToys/${_id}`}><button className='btn btn-black text-white'>Details</button></Link></td>
        </tr>
    );
};

export default SingleToy;
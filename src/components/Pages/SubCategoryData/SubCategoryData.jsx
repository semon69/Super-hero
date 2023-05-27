import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SubCategoryData = ({ data }) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const { toyName,  photo, price, subCategory,availableQuantity, _id, seller, ratting  } = data;
    const location = { pathname: `/allToys/${_id}` }
    const handleBtn = () => {
        if(user){
            navigate(`/allToys/${_id}`)
        } else{       
            Swal.fire('You have to log in first to view details')
            navigate('/login', { state: { from: location } })
        }
    }
    return (
        <div data-aos="flip-left">
            <div className="card w-[370] h-[400px] bg-blue-900 hover:bg-blue-400 shadow-xl my-8">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title">{toyName}</h2>
                    <p>Price: {price}</p>
                    <p>Ratting: {ratting}</p>
                    <div className="card-actions">
                        <button onClick={handleBtn} className="btn btn-black">Details</button>
                        {/* <button className="btn btn-black"><Link to={`/allToys/${_id}`}>Details</Link> </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryData;
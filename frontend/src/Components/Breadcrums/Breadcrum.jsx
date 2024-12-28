// import React from 'react'
// import './Breadcrum.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'

// export const Breadcrum = (props) => {
//     const {product} = props;
//   return (
//     <div className='breadcrum'>
//         HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
//     </div>
//   )
// }
import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

export const Breadcrum = (props) => {
    const { product } = props;

    // Safely handle undefined product and its properties
    const category = product?.category || 'Unknown Category';
    const name = product?.name || 'Unknown Product';

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="" /> 
            SHOP <img src={arrow_icon} alt="" /> 
            {category} <img src={arrow_icon} alt="" /> 
            {name}
        </div>
    );
};


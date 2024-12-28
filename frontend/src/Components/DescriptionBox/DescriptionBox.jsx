import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="desciptionbox-navigator">
            <div className="descriptionboc-nav-box">Description</div>
            <div className="descriptionboc-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of 
                products or services over the internet, it servers as a virtual marketplace where businesses 
                and individuals can showcase their products, interact with customers, and conduct transcations 
                without the need for a physical presence. E-commerce websites have gained immense popularity due 
                to their convenience, accesibility, and the global reach they offer </p>
                <p>
                E-commerce platforms typically display products or services along with detailed descriptions,images,
                prices, and any available variations (e.g,sizes,colors). Each product usually has its own dedicated page
                with relevant information.
                </p>
        </div>
    </div>
  )
}

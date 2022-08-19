import React from 'react'
import {Link }from "react-router-dom"

export default function Cards({products}){

    // const filterproduct=products.filter((filter)=>)
//   console.log("the cards products are" ,products._id)
    return (
    <div className="product product-7 row allpro">
    <figure className="product-media">
      {/* <span className="product-label label-out">Out of Stock</span> */}
      <Link to={`/khaasbazzar/productdetailpage/${products._id}`}>
        <img src="assets/images/products/product-6.jpg" alt="Product image" className="product-image" />
      </Link>
      <div className="product-action-vertical">
        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
      </div>{/* End .product-action-vertical */}
      <div className="product-action">
        <Link to={`/khaasbazzar/productdetailpage/${products._id}`}  className="btn-product btn-cart"><span>add to cart</span></Link>
      </div>
    </figure>
    <div className="product-body">
      <div className="product-cat">
        <a href="#">Jackets</a>
      </div>{/* End .product-cat */}
      <h3 className="product-title"><a href="product.html">Khaki utility boiler jumpsuit</a></h3>{/* End .product-title */}
      <div className="product-price">
        <span className="out-price">$120.00</span>
      </div>{/* End .product-price */}
      <div className="ratings-container">
        <div className="ratings">
          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
        </div>{/* End .ratings */}
        <span className="ratings-text">( 6 Reviews )</span>
      </div>
    </div>
  </div>
  )
}

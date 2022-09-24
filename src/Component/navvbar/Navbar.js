import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="header header-6">
      <div className="header-top">
        <div className="container">
          {/* <div className="header-left">
          <ul className="top-menu top-link-menu d-none d-md-block">
            <li>
              <a href="#">Links</a>
              <ul>
                <li>
                  <a href="tel:#">
                    <i className="icon-phone" />
                    Call: +0123 456 789
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* End .top-menu */}
          {/* </div> */}
          {/* End .header-left */}
          {/* <div className="header-right">
          <div className="social-icons social-icons-color">
            <a
              href="#"
              className="social-icon social-facebook"
              title="Facebook"
              target="_blank"
            >
              <i className="icon-facebook-f" />
            </a>
            <a
              href="#"
              className="social-icon social-twitter"
              title="Twitter"
              target="_blank"
            >
              <i className="icon-twitter" />
            </a>
            <a
              href="#"
              className="social-icon social-instagram"
              title="Pinterest"
              target="_blank"
            >
              <i className="icon-instagram" />
            </a>
            <a
              href="#"
              className="social-icon social-pinterest"
              title="Instagram"
              target="_blank"
            >
              <i className="icon-pinterest-p" />
            </a>
          </div>
          {/* End .soial-icons */}
          {/* <ul className="top-menu top-link-menu">
          <li>
            <a href="#">Links</a>
            <ul>
              <li>
                <a href="#signin-modal" data-toggle="modal">
                  <i className="icon-user" />
                  Login
                </a>
              </li>
            </ul>
          </li>
        </ul> */}
          {/* End .top-menu */}
          {/* <div className="header-dropdown">
          <a href="#">USD</a>
          <div className="header-menu">
            <ul>
              <li>
                <a href="#">Eur</a>
              </li>
              <li>
                <a href="#">Usd</a>
              </li>
            </ul>
          </div>
          {/* End .header-menu */}
          {/* </div> */}
          {/* End .header-dropdown */}
          {/* <div className="header-dropdown">
          <a href="#">Eng</a>
          <div className="header-menu">
            <ul>
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">French</a>
              </li>
              <li>
                <a href="#">Spanish</a>
              </li>
            </ul>
          </div>
          {/* End .header-menu */}
          {/* </div>  */}
          {/* End .header-dropdown */}
        </div>
        {/* End .header-right */}
        {/* </div> */}
      </div>
      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
              <a href="#" className="search-toggle" role="button">
                <i className="icon-search" />
              </a>
              <form action="#" method="get">
                <div className="header-search-wrapper search-wrapper-wide">
                  <label htmlFor="q" className="sr-only">
                    Search
                  </label>
                  <button className="btn btn-primary" type="submit">
                    <i className="icon-search" />
                  </button>
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    placeholder="Search product ..."
                    required
                  />
                </div>
                {/* End .header-search-wrapper */}
              </form>
            </div>
            {/* End .header-search */}
          </div>
          <div className="header-center">
            <Link to="/" className="logo">
              <h2>Khass Bazaar</h2>
              {/* <img
              src="assets/images/demos/demo-9/logo.png"
              alt="Molla Logo"
              width={82}
              height={20}
            /> */}
            </Link>
          </div>
          {/* End .header-left */}
          <div className="header-right">
            <a href="wishlist.html" className="wishlist-link">
              <i className="icon-heart-o" />
              <span className="wishlist-count">3</span>
              <span className="wishlist-txt">My Wishlist</span>
            </a>
            <div className="dropdown cart-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i className="icon-shopping-cart" />
                <span className="cart-count">2</span>
                <span className="cart-txt">$ 164,00</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product.html">
                          Beige knitted elastic runner shoes
                        </a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>x $84.00
                      </span>
                    </div>
                    {/* End .product-cart-details */}
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img
                          src="assets/images/products/cart/product-1.jpg"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close" />
                    </a>
                  </div>
                  {/* End .product */}
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product.html">
                          Blue utility pinafore denim dress
                        </a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>x $76.00
                      </span>
                    </div>
                    {/* End .product-cart-details */}
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img
                          src="assets/images/products/cart/product-2.jpg"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close" />
                    </a>
                  </div>
                  {/* End .product */}
                </div>
                {/* End .cart-product */}
                <div className="dropdown-cart-total">
                  <span>Total</span>
                  <span className="cart-total-price">$160.00</span>
                </div>
                {/* End .dropdown-cart-total */}
                <div className="dropdown-cart-action">
                  <a href="cart.html" className="btn btn-primary">
                    View Cart
                  </a>
                  <a href="checkout.html" className="btn btn-outline-primary-2">
                    <span>Checkout</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .dropdown-cart-total */}
              </div>
              {/* End .dropdown-menu */}
            </div>
            {/* End .cart-dropdown */}
          </div>
        </div>
        {/* End .container */}
      </div>
      {/* End .header-middle */}
      <div className="header-bottom sticky-header">
        <div className="container">
          <div className="header-left">
            <nav className="main-nav">
              <ul className="menu sf-arrows">
                <li className="megamenu-container active">
                  <a href="index.html" className="sf-with-ul">
                    Home
                  </a>

                  {/* End .megamenu */}
                </li>
                <li>
                  <Link
                    to="/khaasbazzar/productdisplaypage"
                    className="sf-with-ul"
                  >
                    Bags
                  </Link>

                  {/* End .megamenu megamenu-md */}
                </li>
                <li>
                  <a href="product.html" className="sf-with-ul">
                    Product
                  </a>
                  <div className="megamenu megamenu-sm">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <div className="menu-col">
                          <div className="menu-title">Product Details</div>
                          {/* End .menu-title */}
                        </div>
                        {/* End .menu-col */}
                      </div>
                      {/* End .col-md-6 */}
                      <div className="col-md-6">
                        <div className="banner banner-overlay">
                          <a href="category.html">
                            <img
                              src="assets/images/menu/banner-2.jpg"
                              alt="Banner"
                            />
                            <div className="banner-content banner-content-bottom">
                              <div className="banner-title text-white">
                                New Trends
                                <br />
                                <span>
                                  <strong>spring 2019</strong>
                                </span>
                              </div>
                              {/* End .banner-title */}
                            </div>
                            {/* End .banner-content */}
                          </a>
                        </div>
                        {/* End .banner */}
                      </div>
                      {/* End .col-md-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .megamenu megamenu-sm */}
                </li>
                <li>
                  <a href="#" className="sf-with-ul">
                    Pages
                  </a>
                  <ul>
                    <li>
                      <a href="about.html" className="sf-with-ul">
                        About
                      </a>
                      <ul>
                        <li>
                          <a href="about.html">About 01</a>
                        </li>
                        <li>
                          <a href="about-2.html">About 02</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html" className="sf-with-ul">
                        Contact
                      </a>
                      <ul>
                        <li>
                          <a href="contact.html">Contact 01</a>
                        </li>
                        <li>
                          <a href="contact-2.html">Contact 02</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/khaasbazzar/login">Login</Link>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html" className="sf-with-ul">
                    Blog
                  </a>
                  <ul>
                    <li>
                      <a href="blog.html">Classic</a>
                    </li>
                    <li>
                      <a href="blog-listing.html">Listing</a>
                    </li>
                    <li>
                      <a href="#">Grid</a>
                      <ul>
                        <li>
                          <a href="blog-grid-2cols.html">Grid 2 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-3cols.html">Grid 3 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-4cols.html">Grid 4 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-sidebar.html">Grid sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Masonry</a>
                      <ul>
                        <li>
                          <a href="blog-masonry-2cols.html">
                            Masonry 2 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-3cols.html">
                            Masonry 3 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-4cols.html">
                            Masonry 4 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-sidebar.html">
                            Masonry sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Mask</a>
                      <ul>
                        <li>
                          <a href="blog-mask-grid.html">Blog mask grid</a>
                        </li>
                        <li>
                          <a href="blog-mask-masonry.html">Blog mask masonry</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Single Post</a>
                      <ul>
                        <li>
                          <a href="single.html">Default with sidebar</a>
                        </li>
                        <li>
                          <a href="single-fullwidth.html">
                            Fullwidth no sidebar
                          </a>
                        </li>
                        <li>
                          <a href="single-fullwidth-sidebar.html">
                            Fullwidth with sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="elements-list.html" className="sf-with-ul">
                    Elements
                  </a>
                  <ul>
                    <li>
                      <a href="elements-products.html">Products</a>
                    </li>
                    <li>
                      <a href="elements-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="elements-titles.html">Titles</a>
                    </li>
                    <li>
                      <a href="elements-banners.html">Banners</a>
                    </li>
                    <li>
                      <a href="elements-product-category.html">
                        Product Category
                      </a>
                    </li>
                    <li>
                      <a href="elements-video-banners.html">Video Banners</a>
                    </li>
                    <li>
                      <a href="elements-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="elements-accordions.html">Accordions</a>
                    </li>
                    <li>
                      <a href="elements-tabs.html">Tabs</a>
                    </li>
                    <li>
                      <a href="elements-testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="elements-blog-posts.html">Blog Posts</a>
                    </li>
                    <li>
                      <a href="elements-portfolio.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="elements-cta.html">Call to Action</a>
                    </li>
                    <li>
                      <a href="elements-icon-boxes.html">Icon Boxes</a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* End .menu */}
            </nav>
            {/* End .main-nav */}
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars" />
            </button>
          </div>
          {/* End .header-left */}
          <div className="header-right">
            <i className="la la-lightbulb-o" />
            <p>Clearance Up to 30% Off</p>
          </div>
        </div>
        {/* End .container */}
      </div>
      {/* End .header-bottom */}
    </header>
  );
}

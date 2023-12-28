import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { single_product_url as url } from "../Constant";
import { useProductsContext } from "../Context/product_context";
import { formatPrice } from "../Helper";
// import {
//   Loading,
//   Error,
// ProductImages,
//   AddToCart,
//   Stars,
//   PageHero,
// } from '../components';
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import PageHero from "../Components/PageHero";
import Stars from "./Stars";
import ProductImages from "./ProductImages";
import AddToCart from './AddToCart';
const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <div id="single_product">
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center" >
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p>
            <hr/>
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;

// <div className='product-center'>
//           <ProductImages images={images} />
//           <section className='content'>
//             <h2>{name}</h2>
//             <Stars stars={stars} reviews={reviews} />
//             <h5 className='price'>{formatPrice(price)}</h5>
//             <p className='desc'>{description}</p>
//             <p className='info'>
//               <span>Available : </span>
//               {stock > 0 ? 'In stock' : 'out of stock'}
//             </p>
//             <p className='info'>
//               <span>SKU :</span>
//               {sku}
//             </p>
//             <p className='info'>
//               <span>Brand :</span>
//               {company}
//             </p>
//             <hr />
            // {stock > 0 && <AddToCart product={product} />}
//           </section>
//         </div>

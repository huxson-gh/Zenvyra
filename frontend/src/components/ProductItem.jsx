import React from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const ProductItem = ({id,image,name,price}) => {

    const {products, currency, addToCart } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className=" border-white border-2 rounded-lg p-2 shadow-sm  h-[350px] flex flex-col justify-between">
        <div className="overflow-hidden ">
          <img
            className="hover:scale-110 transition ease-in-out rounded-lg"
            src={image[0]}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
        <div className="flex justify-end mt-2">
          <button
            // onClick={handleAddToCart}
            className="bg-black hover:opacity-85 text-white mb-1 text-sm font-semibold py-1 px-3 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem
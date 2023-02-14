import React from "react";

export const FeaturedCatagories = () => {
  return (
    <div>
      <div className="flex justify-center py-16 font-poppins text-6xl font-bold">
        <h1>Featured Catagories</h1>
      </div>
      <div className="flex justify-evenly text-3xl">
        <div>
          <a href="#">
            <i class="fa-solid fa-palette flex justify-center text-teal-600"></i>
            <h4 className='font-poppins font-bold text-gray-500'>Art</h4>
          </a>
        </div>
        <div>
          <a href="#">
            <i class="fa-solid fa-basketball flex justify-center text-teal-600"></i>
            <h4 className='font-poppins font-bold text-gray-500'>Sports</h4>
          </a>
        </div>
        <div>
          <a href="#">
            <i class="fa-solid fa-music flex justify-center text-teal-600"></i>
            <h4 className='font-poppins font-bold text-gray-500'>Music</h4>
          </a>
        </div>
        <div>
          <a href="#">
            <i class="fa-solid fa-utensils flex justify-center text-teal-600"></i>
            <h4 className='font-poppins font-bold text-gray-500'>Food & Drinks</h4>
          </a>
        </div>
        <div>
          <a href="#">
            <i class="fa-solid fa-bag-shopping flex justify-center text-teal-600"></i>
            <h4 className='font-poppins font-bold text-gray-500'>Shopping</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

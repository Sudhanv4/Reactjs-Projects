import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to cart!");
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart!");
  };

  return (
    <>
      <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
        {/* https://manuarora.in/boxshadows -> From Here we can take  */}
        <div>
          <h1 className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">{item.title}</h1>
        </div>
        <div>
          <h1 className=" w-40 text-gray-400 font-normal text-[10px] text-left">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>
        </div>
        <div className="h-[180px]">
          <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
        </div>
        <div className="flex items-center justify-between w-full mt-5">
          <p className="text-green-600 font-semibold">${item.price}</p>
          {cart.some((p) => p.id === item.id) ? (
            <button
              className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
              onClick={removeFromCart}>
              Remove item
            </button>
          ) : (
            <button
              className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
              onClick={addToCart}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;

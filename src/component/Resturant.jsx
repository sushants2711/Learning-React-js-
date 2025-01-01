/* eslint-disable react/prop-types */

import { useState } from "react";

export const Resturant = ({ menuData }) => {


    const [quantity, setQuantity] = useState(0);
    const handleAdd = () => {
        if (quantity < 20) {
            setQuantity(prev => prev + 1)
        }
    }



    const handleSubt = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1)
        }
        console.log("quantity", quantity)
    }
    return (

        <>
            <h1 className="text-4xl text-center mt-2 font-semibold underline"> Online Food APP Resturant</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2 mt-4 bg-gradient-to-r from-gray-300 via-slate-600">
                {menuData.map((currEle, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg h-[410px] w-[280px] md:h-[440px] md:w-[320px] text-white box-border mt-6 mx-auto md:transform md:duration-500 md:hover:-translate-y-3 md:hover:scale-105">


                            <div className="h-[150px] md:h-[180px] p-4  justify-between">
                                <h6 className="text-center bg-gray-700 text-sm py-1 rounded-lg">
                                    <span className="font-semibold">{currEle.id}</span> - {currEle.category}
                                </h6>
                                <h2 className="text-center text-lg font-bold mt-2">{currEle.name}</h2>
                                <p className="text-justify text-sm mt-2">
                                    {currEle.description}
                                </p>
                            </div>


                            <div className="overflow-hidden h-[160px]  justify-center items-center">
                                <img
                                    src={currEle.image}
                                    alt="Food Image"
                                    className="h-full w-full object-cover rounded-t-lg"
                                />
                            </div>


                            <div className="bg-gray-800 p-2 text-center rounded-b-lg font-bold text-lg mt-2">
                                ₹{currEle.price}
                            </div>

                            <div className="flex justify-center items-center gap-4 mt-2">
                                <button className="text-center bg-blue-500 text-white  px-4 py-1" onClick={handleAdd} disabled={quantity >= 20}>+</button>
                                <button className="text-center bg-red-500 text-white  px-4 py-1" onClick={handleSubt} disabled={quantity <= 0}>-</button>
                                {quantity}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

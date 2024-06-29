import React from "react";
import { Link } from "react-router-dom";
import DiscountLabel from "./DiscountLabel";
import { BASE_URL_IMAGE } from "../utils/constants";

const ProductCard = ({ product }) => {
    const { Name, ProductPrices, ProductPhotos } = product;

    // Destructuring ProductPrices array to get the first item
    const { Price, WasPrice, Discount, Store, Currency } =
        ProductPrices[0] || {};

    return (
        <div className="relative">
            <div className="relative flex h-full min-h-[27.6rem] flex-col justify-between rounded-md border p-2 text-body-font">
                {/* image and discount section */}
                <div className="relative h-48">
                    {/* image */}
                    <div className="relative flex h-full w-full cursor-pointer items-center justify-center">
                        <img
                            className="h-full w-11/12 object-contain transition-all duration-500 hover:scale-105"
                            src={ProductPhotos?.[0]?.Photo_URL}
                            alt={Name}
                            // fetchPriority="high"
                            height="192"
                            width="160"
                            loading="lazy"
                        />
                    </div>

                    {/* discount label */}
                    {Discount > 0 && (
                        <div
                            className="text-red absolute mr-56 flex h-28 w-28 flex-col"
                            style={{ top: "-22px", left: "-15px" }}
                        >
                            <DiscountLabel />

                            <span
                                className="absolute font-heading text-white"
                                style={{
                                    zIndex: 1,
                                    transform: "rotate(-50deg)",
                                    top: "24px",
                                    left: "6px",
                                }}
                            >
                                {Math.floor(Discount)}%
                            </span>
                        </div>
                    )}
                </div>

                {/* text section */}
                <Link
                    className="mt-2 line-clamp-2 cursor-pointer text-start font-heading text-lg font-medium"
                    to={`/product/${product.id}`}
                >
                    {Name}
                </Link>

                {/* price and store section */}
                <div className="m-2 flex flex-row items-center justify-between text-[14px]">
                    {/* store image */}
                    <img
                        src={BASE_URL_IMAGE + Store.Logo}
                        alt={Store.Name}
                        className="w-8 object-contain"
                        // className="h-5 object-contain"
                    />
                    {/* price */}
                    <p className="text-center font-heading text-body-font">
                        <span className="font-semibold">{Price}</span>
                        <span className="mx-0.5">{Currency.Name}</span>
                    </p>
                    {/* was price */}
                    <p className="mx-2 text-sm text-gray-400 line-through">
                        <span className="font-semibold">{WasPrice}</span>
                        <span className="mx-0.5">{Currency.Name}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

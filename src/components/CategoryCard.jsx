import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL_IMAGE } from "../utils/constants";
import PropTypes from "prop-types";

const CategoryCard = ({ subcategory, index }) => {
    const backgroundImage =
        index % 2 === 0
            ? "/category_photo/bg_orange.svg"
            : "/category_photo/bg_green.svg";
    const backgroundColor = index % 2 === 0 ? "#F28F3B" : "#588B8B";

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: backgroundColor,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
            className="w-86 h-46 flex items-center rounded bg-white p-4 shadow-lg drop-shadow-lg max-sm:mx-auto max-sm:w-80"
        >
            <img
                src={`${BASE_URL_IMAGE}${subcategory.Image}`}
                alt={subcategory.Name}
                className="cover-fill h-20"
            />
            <Link
                //   to={`/product/${subcategory.id}`}
                to={`/product/`}
                className="ml-4 text-xl font-semibold text-white"
            >
                {subcategory.Name}
            </Link>
        </div>
    );
};

CategoryCard.propTypes = {
    subcategory: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default CategoryCard;

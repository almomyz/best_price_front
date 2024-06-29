import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsGallery from "../components/ProductsGallery";
import { BASE_URL_IMAGE } from "../utils/constants";

const fetchProductDetails = async (productId) => {
    const response = await axios.get(`/api/products/${productId}`);
    return response.data;
};

const ProductDetailsPage = () => {
    const [activeTab, setActiveTab] = useState("product_specification");
    const { id } = useParams();
    const {
        data: product,
        isLoading,
        error,
    } = useQuery(["productDetails", id], () => fetchProductDetails(id));

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    let DescriptionDisplay;
    const productDescription = JSON.parse(JSON.parse(product.Description));

    return (
        <>
            {/* Header */}
            <Header />

            <div className="container mx-auto p-4">
                {/* start breadcrumb */}
                <nav className="mb-4 text-sm font-normal italic leading-tight text-[#989696]">
                    <a href="/" className="hover:underline">
                        Home
                    </a>{" "}
                    &gt;
                    <a href="/categories/2" className="hover:underline">
                        Electronics
                    </a>{" "}
                    &gt;
                    <a href="/categories/2" className="hover:underline">
                        Mobile Phones, Tablets & Accessories
                    </a>{" "}
                    &gt;
                    <span>Smartphones</span>
                </nav>

                <div className="flex flex-col lg:flex-row">
                    {/* start image gallery */}
                    <div className="mb-4 w-full lg:w-1/2">
                        <ProductsGallery images={product.ProductPhotos} />
                    </div>

                    <div className="w-full lg:w-1/2 lg:pl-8">
                        {/* product name and description */}

                        <h1 className="mb-4 font-heading text-2xl font-semibold leading-10 text-body-font">
                            {product.Name}
                        </h1>

                        <p className="mb-4 font-lato text-base font-normal leading-normal text-body-font opacity-80">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: productDescription,
                                }}
                            />
                        </p>

                        <div className="mb-4 pt-4">
                            <div className="mb-2 flex items-center justify-between">
                                <div className="flex items-center">
                                    {/* TODO: display the photo and price of the chosen store or lesser price */}
                                    <img
                                        src={
                                            BASE_URL_IMAGE +
                                            product.ProductPrices[0].Store.Logo
                                        }
                                        alt={
                                            product.ProductPrices[0].Store.Name
                                        }
                                        className="mr-2 h-14 shadow"
                                    />
                                    <span className="ms-6 text-lg font-semibold">
                                        {product.ProductPrices[0].Price}{" "}
                                        {product.ProductPrices[0].Currency.Name}
                                    </span>
                                </div>

                                <a href={product.Url}>
                                    <button className="transform rounded-lg bg-primary-orange px-5 py-3 text-white transition duration-300 ease-in-out hover:bg-[#f0780f] focus:outline-none">
                                        go to store
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* products tabs */}
                <section className="body-font text-gray-600">
                    <div className="container mx-auto flex flex-col flex-wrap px-5 py-24">
                        <div className="mb-10 flex flex-wrap border-b-2 border-neutral-200 bg-gray-50">
                            <a
                                onClick={() => setActiveTab("price_comparison")}
                                className={`inline-flex w-1/2 cursor-pointer items-center justify-center rounded-t border-b-2 ${
                                    activeTab === "price_comparison"
                                        ? "border-primary-green bg-gray-100 text-primary-green"
                                        : "border-gray-200 bg-white text-body-font opacity-75 hover:text-gray-900"
                                } py-3 font-heading text-lg font-medium leading-normal tracking-wider sm:w-auto sm:justify-start sm:px-6`}
                            >
                                Price Comparison
                            </a>

                            <a
                                onClick={() =>
                                    setActiveTab("product_specification")
                                }
                                className={`inline-flex w-1/2 cursor-pointer items-center justify-center rounded-t border-b-2 ${
                                    activeTab === "product_specification"
                                        ? "border-primary-green bg-gray-100 text-primary-green"
                                        : "border-gray-200 bg-white text-body-font opacity-75 hover:text-gray-900"
                                } py-3 font-heading text-lg font-medium leading-normal tracking-wider sm:w-auto sm:justify-start sm:px-6`}
                            >
                                Specification
                            </a>
                        </div>

                        <div
                            id="price_comparison"
                            className={`transition-opacity duration-500 ${
                                activeTab === "price_comparison"
                                    ? "opacity-100"
                                    : "opacity-0"
                            } ${activeTab === "price_comparison" ? "block" : "hidden"}`}
                        >
                            {/* product price and store */}
                            <div className="mb-4 pt-4">
                                {product.ProductPrices.map((price, index) => (
                                    <div
                                        key={index}
                                        className="mb-2 flex h-20 w-full items-center justify-between bg-white px-8 shadow-md md:w-3/5"
                                    >
                                        <div className="flex items-center">
                                            <img
                                                src={
                                                    BASE_URL_IMAGE +
                                                    price.Store.Logo
                                                }
                                                alt={price.Store.Name}
                                                className="mr-2 h-14 shadow"
                                            />
                                            <span className="font-heading text-base font-medium leading-tight text-gray-900">
                                                {price.Store.Name}
                                            </span>
                                        </div>
                                        <span className="text-center font-heading text-base font-medium leading-tight text-gray-900">
                                            {price.Price} {price.Currency.Name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            id="product_specification"
                            className={`transition-opacity duration-500 ${
                                activeTab === "product_specification"
                                    ? "opacity-100"
                                    : "opacity-0"
                            } ${activeTab === "product_specification" ? "block" : "hidden"}`}
                        >
                            {/* product specification */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {/* first table */}
                                <div className="ms-8 mt-10">
                                    {product.ProductSpecifications.slice(
                                        0,
                                        Math.ceil(
                                            product.ProductSpecifications
                                                .length / 2,
                                        ),
                                    ).map((spec, index) => (
                                        <div
                                            key={index}
                                            className="flex border-b bg-white shadow"
                                        >
                                            <div className="m-2 w-1/2 border-r-2 font-lato text-base font-semibold leading-normal text-gray-600">
                                                {spec.Specification_Key}
                                            </div>
                                            <div className="m-2 w-1/2 font-lato text-base font-normal leading-normal text-gray-600">
                                                {spec.Specification_Value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* end of first table */}

                                {/* second table */}
                                <div className="ms-8 mt-10">
                                    {product.ProductSpecifications.slice(
                                        Math.ceil(
                                            product.ProductSpecifications
                                                .length / 2,
                                        ),
                                    ).map((spec, index) => (
                                        <div
                                            key={index}
                                            className="flex border-b bg-white shadow"
                                        >
                                            <div className="m-2 w-1/2 border-r-2 font-lato text-base font-semibold leading-normal text-gray-600">
                                                {spec.Specification_Key}
                                            </div>
                                            <div className="m-2 w-1/2 font-lato text-base font-normal leading-normal text-gray-600">
                                                {spec.Specification_Value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* end of second table */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* end of tabs */}
            </div>
            <Footer />
        </>
    );
};

export default ProductDetailsPage;

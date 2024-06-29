import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import { useQuery } from "react-query";
import axios from "axios";

const fetchCategories = async () => {
    const { data } = await axios.get("/api/products/categories");
    return data;
};

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCatOpen, setIsCatOpen] = useState(false);

    const { data: categories, isLoading: categoriesLoading } = useQuery(
        ["categories"],
        fetchCategories,
    );

    if (categoriesLoading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="bg-white pb-4 shadow">
            <header className="container mx-auto w-[93%] py-5 max-md:py-2">
                <div className="flex items-center justify-between">
                    {/* logo */}
                    <a className="relative w-36 overflow-hidden" href="/en">
                        <img
                            className="h-12 w-40 object-contain pe-8 ps-2"
                            src="/image/logo.svg"
                            alt="Logo"
                            fetchpriority="auto"
                            height="90"
                            width="160"
                            sizes="(min-width: 340px) 160px, calc(70vw - 93px)"
                            loading="lazy"
                            role="img"
                        />
                    </a>
                    {/* end logo */}

                    {/* search */}
                    <div className="relative mx-2 flex-1 items-center p-1.5 max-md:hidden">
                        <img
                            src="/image/search.svg"
                            alt="search icon"
                            width="26"
                            height="25"
                            className="absolute left-4 h-10 w-6 text-gray-400"
                        />
                        <SearchBar />
                    </div>
                    {/* end search */}

                    <div className="flex min-w-fit items-center justify-end max-md:min-w-fit">
                        {/* translate section */}
                        <div className="mx-2 flex cursor-pointer items-center max-md:mx-1 max-md:hidden">
                            <img
                                src="/image/translate.svg"
                                alt="translate icon"
                                width="34"
                                height="34"
                            />

                            <button className="mx-2 text-primary-green">
                                العربية
                            </button>
                        </div>
                        {/* end translate section */}

                        {/* user section */}
                        <span className="cursor-pointer p-2 max-md:mx-1 max-md:hidden">
                            <img
                                src="/image/user.svg"
                                alt="user icon"
                                width="40"
                                height="40"
                                className="order-5 md:order-5"
                            />
                        </span>
                        {/* end user section */}

                        {/* burger menu */}
                        <button
                            onClick={() =>
                                setIsNavOpen((prevState) => !prevState)
                            }
                            className="mx-1 hidden rounded-md bg-gray-500 p-2 text-white max-md:block"
                        >
                            <svg
                                className={`transition-transform duration-300 ${isNavOpen && "rotate-90"}`}
                                width="24"
                                height="24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={
                                        isNavOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16m-7 6h7"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* mobile design : search bar */}
                <div className="relative mx-2 mt-2 hidden flex-1 items-center p-1.5 max-md:block">
                    <img
                        src="/image/search.svg"
                        alt="search icon"
                        width="26"
                        height="25"
                        className="absolute left-4 h-10 w-6 text-gray-400"
                    />
                    <SearchBar />
                </div>
                {/* end mobile design ( search bar ) */}
            </header>

            {/* Navigation items */}
            <nav className="block max-md:hidden md:flex">
                <div className="container mx-auto flex flex-col items-center justify-center px-4 py-4">
                    <Navigation />
                </div>
            </nav>

            {/* nav for mobile */}
            <div
                className={`fixed left-0 top-0 z-40 w-screen shadow-xl ${isNavOpen ? "hidden max-md:flex" : "hidden"}`}
            >
                <div className="z-50 max-h-screen w-[320px] overflow-y-auto bg-white">
                    <div className="sticky top-0 z-50 mb-2 border-b bg-white">
                        <div className="flex items-center justify-between px-2 py-3">
                            <a
                                className="relative w-36 overflow-hidden"
                                href="/en"
                            >
                                <img
                                    className="h-12 w-40 object-contain pe-8 ps-2"
                                    src="/image/logo.svg"
                                    alt="Logo"
                                    fetchpriority="auto"
                                    height="90"
                                    width="160"
                                    sizes="(min-width: 340px) 160px, calc(70vw - 93px)"
                                    loading="lazy"
                                />
                            </a>
                            {/* <h3 className="text-red text-lg font-semibold">
                                Welcome
                            </h3> */}
                            <svg
                                className="cursor-pointer"
                                height="1.4rem"
                                width="1.4rem"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                onClick={() => setIsNavOpen(false)}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                        {/* user section */}
                        {/* <div className="mx-2 mb-2 grid grid-cols-2 gap-2">
                            <button className="rounded-md bg-blue-500 py-2 font-semibold text-white">
                                Login
                            </button>
                        </div> */}
                    </div>

                    {/* All categories */}
                    <ul className="border-b px-2 pb-2">
                        <div className="flex items-start">
                            <button className="mx-2 text-gray-600">
                                Categories{" "}
                            </button>

                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="rotate-0 transition-all duration-500 group-hover:rotate-180"
                                height="1.2rem"
                                width="1.2rem"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                            </svg>
                        </div>

                        {categories.map((category) => (
                            <li className="group py-2 ps-4" key={category.id}>
                                <div className="flex items-center justify-between">
                                    <button className="text-start font-lato text-base font-normal leading-normal text-body-font">
                                        {category.Name}
                                    </button>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="rotate-0 transition-all duration-500 group-hover:rotate-180"
                                        height="1.2rem"
                                        width="1.2rem"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0V0z"
                                        ></path>
                                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                    </svg>
                                </div>
                                <ul className="group hidden border-b p-1.5 transition-all duration-500 group-hover:block">
                                    {category.Subcategories &&
                                        category.Subcategories.map((sub) => (
                                            <li
                                                className="text-md group mb-1 font-lato font-normal leading-tight text-body-font"
                                                key={sub.id}
                                            >
                                                <a href="#">{sub.Name}</a>
                                            </li>
                                        ))}
                                </ul>
                            </li>
                        ))}
                    </ul>

                    {/* other link */}
                    <ul className="border-b py-2">
                        {/* Home */}
                        <li className="flex items-center py-2">
                            <a
                                href="/"
                                className="mx-2 cursor-pointer text-gray-600 hover:underline"
                            >
                                Home
                            </a>
                        </li>

                        {/* deals */}
                        <li className="flex items-center py-2">
                            <a
                                href="/deals"
                                className="mx-2 cursor-pointer text-gray-600 hover:underline"
                            >
                                Deals & Offers
                            </a>
                        </li>

                        {/* stores */}
                        <li className="flex items-center py-2">
                            <a
                                href="/stores"
                                className="mx-2 cursor-pointer text-gray-600 hover:underline"
                            >
                                Stores
                            </a>
                        </li>

                        {/* about us */}
                        <li className="flex items-center py-2">
                            <a
                                href="/about"
                                className="mx-2 cursor-pointer text-gray-600 hover:underline"
                            >
                                About Us
                            </a>
                        </li>

                        {/* translate section */}
                        <li className="py-2">
                            <a className="flex items-center" href="/">
                                <img
                                    src="/image/translate.svg"
                                    alt="translate icon"
                                    className="mx-2 h-6 w-6"
                                />
                                <span className="text-primary-green">
                                    العربية
                                </span>
                            </a>
                        </li>

                        {/* user section */}
                        <li className="py-2">
                            <a className="flex items-center" href="/">
                                <img
                                    src="/image/user.svg"
                                    alt="user icon"
                                    className="mx-2 h-6 w-6"
                                />
                                <span className="text-primary-green">
                                    login
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    onClick={() => setIsNavOpen(false)}
                    className="h-screen flex-1 bg-black opacity-50"
                ></div>
            </div>
        </section>
    );
}

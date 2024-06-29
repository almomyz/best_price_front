import React from "react";

export default function NewFooter() {
    return (
        <footer className="mt-10 bg-gray-100 py-8">
            <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
                {/* delimiter section */}
                <div className="mb-6 flex w-full flex-col pr-0 text-center md:mb-0 md:w-auto md:pr-10 md:text-left">
                    <p className="text-justify font-lato text-base font-normal leading-normal text-body-font">
                        Disclaimer: BestPrice.com only acts as online price
                        comparison website, all product names, trademarks,
                        service marks, logos, brands, industrial models and
                        designs featured or referred to within this site are the
                        sole property of their respective owners and/or right
                        holders and are only provided for the purpose of this
                        site. Pricena.com acts as independent party and shall
                        not be considered the representative, agent, employee,
                        sponsor, joint venture partner or otherwise of such
                        owners or right holders.
                    </p>
                </div>

                {/* right section */}
                <div className="mx-auto flex flex-shrink-0 items-center space-x-4 md:ml-auto md:mr-0">
                    <div className="container">
                        
                        {/* logo section */}
                        <div className="mb-10 flex">
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
                        </div>

                        {/* download buttons */}
                        <div className="mt-4 flex space-x-4 md:mt-0">
                            {/* download google play */}
                            <button
                                // hover:scale-105
                                className="inline-flex transform items-center rounded-lg bg-primary-green px-5 py-3 text-white transition duration-300 ease-in-out hover:bg-[#466d6d] focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                </svg>
                                <span className="ml-4 flex flex-col items-start leading-none">
                                    <span className="mb-1 text-xs">
                                        GET IT ON
                                    </span>
                                    <span className="title-font font-medium">
                                        Google Play
                                    </span>
                                </span>
                            </button>

                            {/* download app store */}
                            <button className="inline-flex items-center rounded-lg bg-primary-orange px-5 py-3 text-white transition duration-300 ease-in-out hover:bg-[#f0780f] focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                    viewBox="0 0 305 305"
                                >
                                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                </svg>
                                <span className="ml-4 flex flex-col items-start leading-none">
                                    <span className="mb-1 text-xs">
                                        Download on the
                                    </span>
                                    <span className="title-font font-medium">
                                        App Store
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* copyright section */}
            <h4 className="text-center font-heading text-lg font-medium leading-normal text-body-font">
                © 2024 All rights reserved.
            </h4>
        </footer>
    );
}

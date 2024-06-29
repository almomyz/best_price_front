import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Function to determine which page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const maxPageNumbersToShow = 3;

        if (totalPages <= maxPageNumbersToShow) {
            // Show all page numbers if total pages is less than or equal to maxPageNumbersToShow
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            let startPage = Math.max(
                1,
                currentPage - Math.floor(maxPageNumbersToShow / 2),
            );
            let endPage = startPage + maxPageNumbersToShow - 1;

            // Adjust the startPage and endPage to ensure they are within the valid range
            if (endPage > totalPages) {
                startPage = totalPages - maxPageNumbersToShow + 1;
                endPage = totalPages;
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            // Add ellipsis and last page if needed
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pages.push("...");
                }
                pages.push(totalPages);
            }

            // Add ellipsis and first page if needed
            if (startPage > 1) {
                if (startPage > 2) {
                    pages.unshift("...");
                }
                pages.unshift(1);
            }
        }
        return pages;
    };

    const pages = getPageNumbers();

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-1 py-3 md:px-4">
            {/* Mobile view: Previous and Next buttons */}
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative ml-3 inline-flex items-center justify-center rounded border border-orange-border bg-white px-4 py-2 font-heading text-sm font-semibold leading-8 text-body-font hover:bg-gray-50"
                >
                    Previous
                </button>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative mr-3 inline-flex items-center justify-center rounded border border-orange-border bg-white px-4 py-2 font-heading text-sm font-semibold leading-8 text-body-font hover:bg-gray-50"
                >
                    Next
                </button>
            </div>
            {/* Desktop view: Page number buttons */}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <p className="text-sm text-gray-700">
                    Showing{" "}
                    <span className="font-medium">
                        {(currentPage - 1) * 10 + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-medium">
                        {Math.min(currentPage * 10, totalPages * 10)}
                    </span>{" "}
                    of <span className="font-medium">{totalPages * 10}</span>{" "}
                    results
                </p>
                <div>
                    <nav
                        className="isolate inline-flex gap-3 -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        {/* Previous button */}
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={
                                "relative inline-flex h-10 w-10 items-center justify-center rounded border border-orange-border bg-white font-heading text-sm font-semibold leading-8 text-body-font hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            }
                        >
                            <span className="sr-only">Previous</span>
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {/* Page number buttons */}
                        {pages.map((page, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    typeof page === "number" &&
                                    onPageChange(page)
                                }
                                disabled={page === "..."}
                                // className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === page ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'} focus:z-20 focus:outline-offset-0`}
                                className={`relative inline-flex h-10 w-10 items-center justify-center rounded border border-orange-border font-heading text-sm font-semibold leading-8 ${
                                    currentPage === page
                                        ? "bg-primary-orange text-white hover:bg-orange-400"
                                        : "bg-white text-body-font hover:bg-gray-50"
                                } focus:z-20 focus:outline-offset-0`}
                            >
                                {page}
                            </button>
                        ))}
                        {/* Next button */}
                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={
                                "relative inline-flex h-10 w-10 items-center justify-center rounded border border-orange-border bg-white font-heading text-sm font-semibold leading-8 text-body-font hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            }
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;

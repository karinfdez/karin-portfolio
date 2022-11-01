import React, { useState, useMemo } from "react";
// import ReactPaginate from "react-paginate";
import Project from "../Project";

function Items({ currentItems, className }) {
    return (
        <div className={className}>
            {currentItems.map((item, index) => (
                <Project project={item} key={index} />
            ))}
        </div>
    );
}

export default function Pagination({ itemsPerPage, items, className }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useMemo(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
    return (
        <div>
            {currentItems && currentItems.length > 0 && (
                <div>
                    <Items currentItems={currentItems} className={className} />
                    {/* <ReactPaginate
                        className="flex flex-row justify-center pt-6 pagination-container space-x-2 font-bold"
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    /> */}
                </div>
            )}
        </div>
    );
}

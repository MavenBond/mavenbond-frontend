import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import { usePagination, DOTS } from "../../hooks/usePaginate";

type Props = {
  onPageChange: any;
  totalCount: number;
  currentPage: number;
  pageSize: number;
};

export default function Pagination({ onPageChange, totalCount, currentPage, pageSize }: Props) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount: 1,
    pageSize,
  }) as (string | number)[];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className='flex items-center justify-between border-t  px-4 py-3 sm:px-6'>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Showing <span className='font-medium'>1</span> to{" "}
            <span className='font-medium'>10</span> of <span className='font-medium'>97</span>{" "}
            results
          </p>
        </div>

        <div className='btn-group'>
          <button
            className={currentPage === 1 ? "btn btn-outline btn-disabled" : "btn btn-outline"}
            onClick={onPrevious}
          >
            <span className='sr-only'>Previous</span>
            <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
          </button>

          {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
          {paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return <button className='btn btn-outline btn-disabled'>...</button>;
            }

            return pageNumber === currentPage ? (
              <button className='btn btn-outline btn-active' onClick={onPageChange(pageNumber)}>
                {pageNumber}
              </button>
            ) : (
              <button className='btn btn-outline' onClick={() => onPageChange(pageNumber)}>
                {pageNumber}
              </button>
            );
          })}

          <button
            className={
              currentPage === lastPage ? "btn btn-outline btn-disabled" : "btn btn-outline"
            }
            onClick={onNext}
          >
            <span className='sr-only'>Next</span>
            <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
          </button>
        </div>
      </div>
    </div>
  );
}

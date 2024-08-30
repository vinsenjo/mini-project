// import { cn } from '@/libs/cn';
// import Link from 'next/link';
// import React from 'react';
// fetch('http://localhost:8000/api/event/')
//   .then(response => response.json())

// type PaginationProps = {
//     page?: string;
//     totalPages: number;
//     hasPrevPage:boolean;
//     hasNextPage: boolean;
// };

// const Pagination: React.FC<PaginationProps> = (props) => {
//     const { page = '0', totalPages, hasNextPage } = props;

//     const currentPage = Math.min(Math.max(Number(page), 0), totalPages);

//     const getPagesToShow = () => {
//         let startPage = currentPage - 1;
//         let endPage = currentPage + 1;

//         if (totalPages <= totalPages) {
//             startPage = 1;
//             endPage = totalPages;
//         }

//         // else if (currentPage <= 3) {
//         //     startPage = 1;
//         //     endPage = 5;
//         // } 
//         // else if (currentPage >= totalPages - 2) {
//         //     startPage = totalPages - 4;
//         //     endPage = totalPages;
//         // }

//         return Array.from(
//             { length: endPage - startPage + 1 },
//             (_, i) => startPage + i,
//         );
//     };

//     const pages = getPagesToShow();

//     return (
//         <div className="flex items-center justify-center space-x-6 text-black">
//             <Link
//                 className={cn(
//                     'rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50',
//                     currentPage === 0 ? 'pointer-events-none bg-gray-100' : '',
//                 )}
//                 href={`?page=${Math.max(currentPage - 1)}`}
//             >
//                 Previous
//             </Link>
//             <nav
//                 aria-label="Pagination"
//                 className="relative z-0 inline-flex -space-x-px rounded-md"
//             >
//                 {pages.map((p, i) => (
//                     <Link
//                         key={p}
//                         className={cn(
//                             'relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50',
//                             p === currentPage
//                                 ? 'pointer-events-none bg-gray-100'
//                                 : '',
//                             i === 0 ? 'rounded-l-md' : '',
//                             i === pages.length - 1 ? 'rounded-r-md' : '',
//                         )}
//                         href={`?page=${p}`}
//                     >
//                         {p}
//                     </Link>
//                 ))}
//             </nav>
//             <Link
//                 className={cn(
//                     'rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50',
//                     !hasNextPage ? 'pointer-events-none bg-gray-100' : '',
//                 )}
//                 href={`?page=${Math.min(currentPage + 1, totalPages)}`}
//             >
//                 Next
//             </Link>
//         </div>
//     );
// };
// export default Pagination;

import Link from 'next/link';
import React from 'react';

interface Props {
  page?: string;
  totalPages: number;
  hasNextPage: boolean;
}

const Pagination = ({ page = '1', totalPages, hasNextPage }: Props) => {
  const currentPage = parseInt(page, 10);

  const getPageRange = () => {
    let start = 1;
    let end = start + 9;

    if (totalPages > 10) {
      if (currentPage % 10 === 0) {
        start = currentPage - 9;
      } else {
        start = currentPage - (currentPage % 10) + 1;
      }
    }

    if (end > totalPages) {
      end = totalPages;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pages = getPageRange();

  if (totalPages <= 1) return null;

  return (
    <div>
      <nav className='flex space-x-px justify-center mt-2'>
        {/* Previous Page Nav */}
        {currentPage > 1 && (
          <Link
            href={`?page=${currentPage - 1}`}
            className='border border-gray px-4 py-2 bg-slate-100 hover:bg-orange-600 hover:text-white'
          >
            {'<<'}
          </Link>
        )}
        {/* Page Numbers */}
        {pages.map((pageNumber) => (
          <Link
            key={pageNumber}
            href={`?page=${pageNumber}`}
            className='border border-gray-50 px-4 py-2 hover:bg-orange-500 hover:text-white'
          >
            {pageNumber}
          </Link>
        ))}
        {/* Next Page Nav */}
        {hasNextPage && (
          <Link
            href={`?page=${currentPage + 1}`}
            className='border border-gray px-4 py-2 bg-slate-100 hover:bg-orange-600 hover:text-white'
          >
            {'>>'}
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Pagination;

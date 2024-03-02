interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages = []
    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      pages.push(i)
    }
    return pages
  }

  return (
    <nav className="mt-4 flex justify-center">
      <ul className="flex list-none divide-x divide-gray-300 rounded-lg border border-gray-300">
        {currentPage > 1 && (
          <li>
            <button
              className="px-3 py-2 hover:bg-gray-100"
              onClick={() => onPageChange(currentPage - 1)}
            >
              {'<'}
            </button>
          </li>
        )}

        {getPageNumbers().map((page) => (
          <li key={page}>
            <button
              className={`px-3 py-2 hover:bg-gray-100 ${currentPage === page ? 'bg-gray-100' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {currentPage < totalPages && (
          <li>
            <button
              className="px-3 py-2 hover:bg-gray-100"
              onClick={() => onPageChange(currentPage + 1)}
            >
              {'>'}
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

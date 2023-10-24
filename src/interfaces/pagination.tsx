interface PaginationInterface {
    totalPages: number,
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
}

export default PaginationInterface;
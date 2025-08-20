import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface PaginationPrice {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination = ({ totalPages, page, setPage }: PaginationPrice) => {
  return (
    <>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => setPage(selected + 1)}
        forcePage={page - 1}
        containerClassName={css.pagination}
        activeClassName={css.active}
        nextLabel="→"
        previousLabel="←"
      />
    </>
  );
};

export default Pagination;

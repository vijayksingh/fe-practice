const Pagination = ({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage,
}) => {
  // First page disable First and Prev
  // Last page disable next and last

  const beginning = activePage === 1 ? 1 : (activePage - 1) * rowsPerPage + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  return (
    <>
      <div>
        <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
          First
        </button>
        <button
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          Prev
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          Next
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          Last
        </button>
      </div>
      <div>
        <div>
          Page {activePage} of {totalPages}
        </div>
        <div>
          Row {beginning} - {end} of {count}{" "}
        </div>
      </div>
    </>
  );
};

export default Pagination;
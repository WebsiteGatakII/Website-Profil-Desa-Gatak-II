const Pagination = ({
    currentPage, 
    totalPages, 
    paginate
}) => {

    return <>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link"
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
                >Previous</a></li>

                {
                    [...Array(totalPages).keys()].map((number, i) => (
                        <li className="page-item" key={i}>
                            <a className={`page-link ${number + 1 === currentPage ? 'active' : ''}`}
                             
                            key={number}
                            onClick={() => paginate(number + 1)}
                            >{number + 1}</a>
                        </li>
                    ))
                }
                
                <li className="page-item"><a className="page-link" 
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                >Next</a></li>
            </ul>
        </nav>
    </>
}

export default Pagination;